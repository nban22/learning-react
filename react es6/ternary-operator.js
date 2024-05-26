if (authenticated) {
    renderApp();
  } else {
    renderLogin();
  }

authenticated ? renderApp() : renderLogin();