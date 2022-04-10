import { Component } from "react";

export default class DarkModeToggle extends Component {
  toggleTheme() {
    // Determine theme to set to
    let themeToSetTo = this.state.theme === "light" ? "dark" : "light";

    // Set theme
    this.setState({
      theme: themeToSetTo,
    })
    localStorage.theme = themeToSetTo;
    themeToSetTo === "dark" ? document.documentElement.classList.add('dark') : document.documentElement.classList.remove('dark');
  }
  
  constructor(props) {
    super(props);
    this.state = {
      theme: "light",
    }
  }

  componentDidMount() {
    // Determine initial theme and set the theme variable in state accordingly
    if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      document.documentElement.classList.add('dark')
      this.setState({
        theme: "dark",
      })
    } else {
      document.documentElement.classList.remove('dark')
      this.setState({
        theme: "light",
      })
    }
  }


  render() {
    return (
      <button className="relative inline-block w-10 mr-2 align-middle select-none transition duration-200 ease-in">
        <input onClick={() => this.toggleTheme()} defaultChecked={this.state.theme === "dark" ? true : false} type="checkbox" name="toggle" id="toggle" className="checked:right-0 toggle-checkbox absolute block w-6 h-6 rounded-full appearance-none cursor-pointer bg-white dark:bg-gray-800" />
        <label htmlFor="toggle" className="toggle-label block overflow-hidden h-6 rounded-full cursor-pointer bg-gray-200 dark:bg-gray-700"></label>
      </button>
    );
  }
}