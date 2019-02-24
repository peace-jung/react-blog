const list = [
  {
    title: "Home",
    url: "/",
    child: {}
  },
  {
    title: "About",
    url: "/about",
    child: {}
  },
  {
    title: "Development",
    url: "#",
    child: {
      "1": {
        title: "Javascript",
        url: "/js"
      },
      "2": {
        title: "React",
        url: "/react"
      },
      "3": {
        title: "etc",
        url: "/etc"
      }
    }
  },
  {
    title: "Life",
    url: "#",
    child: {
      "1": {
        title: "1",
        url: "/1"
      },
      "2": {
        title: "2",
        url: "/2"
      },
      "3": {
        title: "3",
        url: "/3"
      }
    }
  }
];

export default list;
