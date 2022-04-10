<template>
  <div class="layout">
    <header class="header">
      <strong>
        <g-link to="/">
          <h2>{{ $static.metadata.siteName }}</h2>
        </g-link>
      </strong>
      <nav class="nav">
        <g-link class="nav__link" to="/">Home</g-link>
        <g-link class="nav__link" to="/about/">About</g-link>
      </nav>
    </header>
    <slot/>
  </div>
</template>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>

<style>
.layout {
  max-width: 760px;
  margin: 0 auto;
  padding-left: 20px;
  padding-right: 20px;
}

.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
  height: 80px;
}

.nav__link {
  margin-left: 20px;
}
</style>

<style lang="scss" src="../styles/vars.scss"></style>
<style lang="scss" src="../styles/vars-dark.scss"></style>
<style lang="scss">
.home-links a {
  margin-right: 1rem;
}


html {
  body {
    background-color: var(--cm-background);
    color: var(--cm-font-color);
    font-family: 'Noto Sans KR', sans-serif;

    h1, 
    h2 {
      font-weight: 700;
    }

    h2 {
      font-size: 1.8rem;
    }

    a, a:visited, a:hover {
      color: var(--cm-font-color);
      text-decoration: none;
    }


    code[class*="language-"] {
      font-family: 'Nanum Gothic Coding', monospace;
    }

    code[class*="language-"] .line-numbers-rows {
      top: -4px;
    }

  }
}
</style>