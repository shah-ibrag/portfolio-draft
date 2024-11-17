import React from 'react';

function Setup() {
  return (
    <div style={{ margin: '20px' }}>
      <h2>My Development Environment</h2>
      <div>
        <h3>Code Editor</h3>
        <p>I use Visual Studio Code (VSCode) as my primary code editor, optimized with a suite of extensions to boost productivity. Key extensions include ESLint for maintaining code quality, Prettier for code formatting, and GitLens to enhance the Git capabilities of VSCode.</p>
      </div>
      <div>
        <h3>Terminal Setup</h3>
        <p>My terminal of choice is Zsh with Oh-My-Zsh, which I've customized with themes and plugins that streamline my workflow. This setup provides powerful command line features like advanced tab completion and shell scripting, which are essential for efficient backend development.</p>
      </div>
      <div>
        <h3>Additional Tools</h3>
        <p>For version control, I rely on Git, managed through both command line and VSCode’s integrated Git support. For debugging and testing web applications, I frequently use Chrome DevTools and Postman for API testing and debugging.</p>
      </div>
    </div>
  );
}

export default Setup;
