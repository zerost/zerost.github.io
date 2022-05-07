---
title: 리눅스 하드디스크 파일시스템 NTFS에서 EXT4 으로 변경
date: 2022-05-08 03:22:00
tags:
category: ['Raspberry Pi', 'Ubuntu Linux']
lang: ko
---
# 서론
이번에 DAS를 구매하게 되었다. 윈도우에서 사용하던 하드디스크를 라즈베리파이에 연결했다.
그래서 리눅스에서 관리되기 때문에 EXT4로 관리하는게 훨씬 성능, 안정성면에서 
나을 것 같아서 EXT4로 변환했다.

# 하드디스크를 확인
```bash
$ sudo fdisk -l
...
Disk /dev/sdd: 465.78 GiB, 500107862016 bytes, 976773168 sectors
Disk model: TerraMaster
Units: sectors of 1 * 512 = 512 bytes
Sector size (logical/physical): 512 bytes / 4096 bytes
I/O size (minimum/optimal): 4096 bytes / 4096 bytes
Disklabel type: dos
Disk identifier: 0xd2******
                     
Device     Boot Start       End   Sectors   Size Id Type
/dev/sdd1        2048 976769023 976766976 465.8G  7 HPFS/NTFS/exFAT
```

# 하드디스크 마운트
윈도우에서 포맷한 드라이브여서 그런지 아래의 메시지가 뜬다.

```bash
$ sudo mount /dev/sdd1 /mnt/tmp
The disk contains an unclean file system (0, 0).
The file system wasn't safely closed on Windows. Fixing.
```

하드디스크를 백업한다. (과정생략)

# 윈도우 파티션 삭제
```bash
$ sudo fdisk /dev/sdd

Welcome to fdisk (util-linux 2.34).
Changes will remain in memory only, until you decide to write them.
Be careful before using the write command.


Command (m for help):
```

명령어 p를 입력하면 현재 선택된 하드 디스크가 확인된다.

```bash
Command (m for help): p
Disk /dev/sdd: 465.78 GiB, 500107862016 bytes, 976773168 sectors
Disk model: TerraMaster
Units: sectors of 1 * 512 = 512 bytes
Sector size (logical/physical): 512 bytes / 4096 bytes
I/O size (minimum/optimal): 4096 bytes / 4096 bytes
Disklabel type: dos
Disk identifier: 0xd2******

Device     Boot Start       End   Sectors   Size Id Type
/dev/sdd1        2048 976769023 976766976 465.8G  7 HPFS/NTFS/exFAT
```

백업완료 후 하드디스크 확인하고 이상이 없으면 d를 입력한다.

```bash
Command (m for help): d
Selected partition 1
Partition 1 has been deleted.
```

파티션 삭제완료

# 리눅스 Ext4 파티션 생성
n을 입력해서 새로운 파티션 생성. 이후 디폴트로 입력해준다.
```bash
Command (m for help): n
Partition type
   p   primary (0 primary, 0 extended, 4 free)
   e   extended (container for logical partitions)
Select (default p): p
Partition number (1-4, default 1): 1
First sector (2048-976773167, default 2048):
Last sector, +/-sectors or +/-size{K,M,G,T,P} (2048-976773167, default 976773167):

Created a new partition 1 of type 'Linux' and of size 465.8 GiB.
Partition #1 contains a ntfs signature.

Do you want to remove the signature? [Y]es/[N]o: y

The signature will be removed by a write command.
```

결과확인을 위해 p입력

```bash
Command (m for help): p
Disk /dev/sdd: 465.78 GiB, 500107862016 bytes, 976773168 sectors
Disk model: TerraMaster
Units: sectors of 1 * 512 = 512 bytes
Sector size (logical/physical): 512 bytes / 4096 bytes
I/O size (minimum/optimal): 4096 bytes / 4096 bytes
Disklabel type: dos
Disk identifier: 0xd2******

Device     Boot Start       End   Sectors   Size Id Type
/dev/sdd1        2048 976773167 976771120 465.8G 83 Linux

Filesystem/RAID signature on partition 1 will be wiped.
```


# 변경사항 저장
명령어 w를 입력을 해야지만 저장이 된다. 그냥 종료하면 변경사항이 저장이 되질 않는다.

```bash
Command (m for help): w
The partition table has been altered.
Syncing disks.
```

# EXT4로 생성
Creating journal (262144 blocks): 이 부분에서도 그냥 엔터를 입력했다.
생성 후 정상 

```bash
$ sudo mkfs.ext4 /dev/sdd1
mke2fs 1.45.5 (07-Jan-2020)
Creating filesystem with 122096390 4k blocks and 30531584 inodes
Filesystem UUID: 6d374378-97b2-4f88-b3d8-44b39764430c
Superblock backups stored on blocks:
        32768, 98304, 163840, 229376, 294912, 819200, 884736, 1605632, 2654208,
        4096000, 7962624, 11239424, 20480000, 23887872, 71663616, 78675968,
        102400000

Allocating group tables: done
Writing inode tables: done
Creating journal (262144 blocks):
done
Writing superblocks and filesystem accounting information:
done
```

# 결과 확인
```bash
$ sudo fdisk -l
...
Disk /dev/sdd: 465.78 GiB, 500107862016 bytes, 976773168 sectors
Disk model: TerraMaster
Units: sectors of 1 * 512 = 512 bytes
Sector size (logical/physical): 512 bytes / 4096 bytes
I/O size (minimum/optimal): 4096 bytes / 4096 bytes
Disklabel type: dos
Disk identifier: 0xd2******

Device     Boot Start       End   Sectors   Size Id Type
/dev/sdd1        2048 976773167 976771120 465.8G 83 Linux
```

정상적으로 전환완료!