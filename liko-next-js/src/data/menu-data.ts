import { IMenuDT } from "@/types/menu-d-t";


const menu_data:IMenuDT[] = [
  {
    id: 1,
    title: 'Home',
    link: '/',
    // home_menus: [
    //   { title: 'MAIN HOME', link: '/', img: '/assets/img/menu/white-version/home-1.jpg' },
    //   { title: 'Fashion STUDIO', link: '/home-2', img: '/assets/img/menu/white-version/home-2.jpg' },
    //   { title: 'CREATIVE AGENCY', link: '/home-3', img: '/assets/img/menu/white-version/home-3.jpg' },
    //   { title: 'Digital Agency', link: '/home-4', img: '/assets/img/menu/white-version/home-4.jpg' },
    //   { title: 'DESIGN STUDIO', link: '/home-5', img: '/assets/img/menu/white-version/home-5.jpg' },
    //   { title: 'Minimal Shop', link: '/home-6', img: '/assets/img/menu/white-version/home-6.jpg' },
    //   { title: 'DESIGN STUDIO', link: '/home-7', img: '/assets/img/menu/white-version/home-7.jpg' },
    //   { title: 'showcase carousel', link: '/home-8', img: '/assets/img/menu/white-version/home-8.jpg' },
    //   { title: 'INTERACTIVE LINKS', link: '/home-9', img: '/assets/img/menu/white-version/home-9.jpg' },
    //   { title: 'wrapper slider', link: '/home-10', img: '/assets/img/menu/white-version/home-10.jpg' },
    //   { title: 'showcase parallax', link: '/home-11', img: '/assets/img/menu/white-version/home-11.jpg' },
    //   { title: 'horizontal', link: '/home-12', img: '/assets/img/menu/white-version/home-12.jpg' },
    // ]
  },
  {
    id: 2,
    title: 'Services',
    link: '#',
    pages_mega_menu: {
      first: {
        title: 'OUR SERVICES',
        submenus: [
          { title: 'Digitizing', link: '/' },
          { title: 'Vector Art', link: '/' },
          { title: 'Patches', link: '/' },
          { title: 'Embroidery', link: '/' },
          { title: 'Other Services', link: '/' },
          
        ]
        // submenus: [
        //   { title: 'ABOUT US', link: '/about-us' },
        //   { title: 'FAQ Page', link: '/faq' },
        //   { title: 'ABOUT ME', link: '/about-me' },
        //   { title: 'Pricing', link: '/pricing' },
        //   { title: 'Team Page', link: '/team' },
        //   { title: 'OUR CLIENTS', link: '/brand' },
        //   { title: 'Team Details', link: '/team-details' },
        //   { title: 'Register', link: '/register' },
        //   { title: 'OUR SERVICES', link: '/service' },
        //   { title: 'LogIn', link: '/login' },
        //   { title: 'SERVICES DETAILS', link: '/service-details' },
        //   { title: 'ERROR PAGE', link: '/error' },
        // ]
      },
      second: {
        title: 'Shop Page',
        submenus: [
          { title: 'Shop Page', link: '/shop' },
          { title: 'Shop Details One', link: '/shop-details' },
          { title: 'Shop Details Two', link: '/shop-details-2' },
          { title: 'my account', link: '/account' },
          { title: 'Cart', link: '/cart' },
          { title: 'Checkout', link: '/checkout' },
          { title: 'Wishlist', link: '/wishlist' },
        ]
      },

    }
  },
  {
    id: 3,
    title: 'About',
    link: '/',
    portfolio_mega_menus: {
      first: {
        title: 'ABOUT US',
        submenus: [
          {
            id:1,
            menu_lists: [
              { title: 'About company', link: '/about-us' },
              { title: 'About team', link: '/' },
              { title: 'FAQ', link: '/faq' },
              
            ]
          }
        ]
      },
      second: {
        submenus: [
          {
            id:1,
            title: 'List Layouts',
            menu_lists: [
              { title: 'two-columns', link: '/portfolio-grid-col-2' },
              { title: 'three-columns', link: '/portfolio-grid-col-3' },
              { title: 'three-columns Wide', link: '/portfolio-grid-col-3-fullwidth' },
              { title: 'four-columns', link: '/portfolio-grid-col-4' },
              { title: 'four-columns Wide', link: '/portfolio-grid-col-4-fullwidth' },
            ]
          },
          {
            id:2,
            title: 'PORTFOLIO SINGLES',
            menu_lists: [
              { title: 'Creative', link: '/portfolio-showcase-details-2' },
              { title: 'images Small', link: '/portfolio-details-1' },
              { title: 'Sliding', link: '/portfolio-details-2' },
              { title: 'Image Comparison', link: '/portfolio-details-comparison' },
              { title: 'Video', link: '/portfolio-details-video' },
              { title: 'CUSTOM LIGHT', link: '/portfolio-custom-light' },
              { title: 'Gallery', link: '/portfolio-showcase-details' },
              { title: 'Mockups', link: '/portfolio-details-3' },
            ]
          },
        ]
      }
    }
  },
  {
    id: 4,
    title: 'Blog',
    link: '/blog-modern',
    dropdown_menus: [
      { title: 'Modern', link: '/blog-modern' },
      
    ]
  },
  {
    id: 5,
    title: 'Contact',
    link: '/contact-2',
    dropdown_menus:[
      
      { title: 'Get IN touch', link: '/contact-2' },
    ]
  }
];



export default menu_data;

// mobile menus 
export const mobile_menu_data:{
  id: number;
  title: string;
  link: string;
  dropdown_menus: {
      title: string;
      link: string;
  }[];
}[] = [
  {
    id:1,
    title: 'Home',
    link: '/',
    dropdown_menus:[
      { title: 'MAIN HOME', link: '/'},
      { title: 'Fashion STUDIO', link: '/home-2'},
      { title: 'CREATIVE AGENCY', link: '/home-3'},
      { title: 'Digital Agency', link: '/home-4'},
      { title: 'DESIGN STUDIO', link: '/home-5'},
      { title: 'Minimal Shop', link: '/home-6'},
      { title: 'DESIGN STUDIO', link: '/home-7'},
      { title: 'showcase carousel', link: '/home-8'},
      { title: 'INTERACTIVE LINKS', link: '/home-9'},
      { title: 'wrapper slider', link: '/home-10'},
      { title: 'showcase parallax', link: '/home-11'},
      { title: 'horizontal', link: '/home-12'},
    ]
  },
  {
    id: 2,
    title: 'Pages',
    link: '#',
    dropdown_menus:[
      { title: 'ABOUT US', link: '/about-us' },
      { title: 'FAQ Page', link: '/faq' },
      { title: 'ABOUT ME', link: '/about-me' },
      { title: 'Pricing', link: '/pricing' },
      { title: 'Team Page', link: '/team' },
      { title: 'OUR CLIENTS', link: '/brand' },
      { title: 'Team Details', link: '/team-details' },
      { title: 'Register', link: '/register' },
      { title: 'OUR SERVICES', link: '/service' },
      { title: 'LogIn', link: '/login' },
      { title: 'SERVICES DETAILS', link: '/service-details' },
      { title: 'ERROR PAGE', link: '/error' },
      { title: 'Shop Page', link: '/shop' },
      { title: 'Shop Details One', link: '/shop-details/1' },
      { title: 'Shop Details Two', link: '/shop-details-2' },
      { title: 'my account', link: '/account' },
      { title: 'Cart', link: '/cart' },
      { title: 'Checkout', link: '/checkout' },
      { title: 'Wishlist', link: '/wishlist' },
    ]
  },
  {
    id: 3,
    title: 'Portfolio',
    link: '/portfolio-standard',
    dropdown_menus:[
      { title: 'Standard', link: '/portfolio-standard' },
      { title: 'Interactive', link: '/home-10' },
      { title: 'random', link: '/portfolio-random' },
      { title: 'showcase parallax', link: '/home-11' },
      { title: 'Masonry random', link: '/portfolio-masonry' },
      { title: 'Vertical Carousel', link: '/home-12' },
      { title: 'wrapper', link: '/portfolio-wrapper' },
      { title: 'horizontal', link: '/portfolio-showcase' },
      { title: 'Image Slider', link: '/home-7' },
      { title: 'wrapper Slider', link: '/home-11' },
      { title: 'parallax showcase', link: '/portfolio-showcase' },
      { title: 'Perspective Slider', link: '/home-9' },
      { title: 'two-columns', link: '/portfolio-grid-col-2' },
      { title: 'three-columns', link: '/portfolio-grid-col-3' },
      { title: 'three-columns Wide', link: '/portfolio-grid-col-3-fullwidth' },
      { title: 'four-columns', link: '/portfolio-grid-col-4' },
      { title: 'four-columns Wide', link: '/portfolio-grid-col-4-fullwidth' },
      { title: 'Creative', link: '/portfolio-showcase-details-2' },
      { title: 'images Small', link: '/portfolio-details-1' },
      { title: 'Sliding', link: '/portfolio-details-2' },
      { title: 'Image Comparison', link: '/portfolio-details-comparison' },
      { title: 'Video', link: '/portfolio-details-video' },
      { title: 'CUSTOM LIGHT', link: '/portfolio-custom-light' },
      { title: 'Gallery', link: '/portfolio-showcase-details' },
      { title: 'Mockups', link: '/portfolio-details-3' },
    ]
  },
  {
    id: 4,
    title: 'Blog',
    link: '/blog-modern',
    dropdown_menus:[
      { title: 'Modern', link: '/blog-modern' },
    ]
  },
  {
    id: 5,
    title: 'Contact',
    link: '/contact-2',
    dropdown_menus:[
      { title: 'GET IN TOUCH', link: '/contac-2' },
      
    ]
  }
]