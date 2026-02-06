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
    title: 'Digitizing',
    link: '/digitizing-service',
  
  },
  {
    id: 3,
    title: 'Vector Art',
    link: '/vector-service',
  
  },
  {
    id: 4,
    title: 'Custom Patches',
    link: '/custom-patches-service',
  
  },
  // {
  //   id: 2,
  //   title: 'Services',
  //   link: '/service',
  //   pages_mega_menu: {
  //     first: {
  //       title: 'OUR SERVICES',
  //       submenus: [
  //         { title: 'Digitizing Embroidery', link: '/service-details' },
  //         { title: 'Vector Art', link: '/' },
  //         { title: 'Custom Patches', link: '/' },
  //         { title: 'Other Services (Coming Soon)', link: '/' },
          
  //       ]
  //       // submenus: [
  //       //   { title: 'ABOUT US', link: '/about-us' },
  //       //   { title: 'FAQ Page', link: '/faq' },
  //       //   { title: 'ABOUT ME', link: '/about-me' },
  //       //   { title: 'Pricing', link: '/pricing' },
  //       //   { title: 'Team Page', link: '/team' },
  //       //   { title: 'OUR CLIENTS', link: '/brand' },
  //       //   { title: 'Team Details', link: '/team-details' },
  //       //   { title: 'Register', link: '/register' },
  //       //   { title: 'OUR SERVICES', link: '/service' },
  //       //   { title: 'LogIn', link: '/login' },
  //       //   { title: 'SERVICES DETAILS', link: '/service-details' },
  //       //   { title: 'ERROR PAGE', link: '/error' },
  //       // ]
  //     },
  //     second: {
  //       title: 'Shop Page',
  //       submenus: [
  //         { title: 'Shop Page', link: '/shop' },
  //         { title: 'Shop Details One', link: '/shop-details' },
  //         { title: 'Shop Details Two', link: '/shop-details-2' },
  //         { title: 'my account', link: '/account' },
  //         { title: 'Cart', link: '/cart' },
  //         { title: 'Checkout', link: '/checkout' },
  //         { title: 'Wishlist', link: '/wishlist' },
  //       ]
  //     },

  //   }
  // },
  {
    id: 5,
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
              // { title: 'About company1', link: '/about-me' },
              // { title: 'About team', link: '/team' },
              { title: 'FAQ', link: '/faq' },
              {title:'Pricing',link:'/pricing'}
              
            ]
          }
        ]
      },
      
    }
  },
  // {
  //   id: 4,
  //   title: 'Blog',
  //   link: '/blog-modern',
  //   dropdown_menus: [
  //     { title: 'Modern', link: '/blog-modern' },
      
  //   ]
  // },
  {
    id: 6,
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
    id: 1,
    title: 'Home',
    link: '/',
    dropdown_menus: []
  },
  {
    id: 2,
    title: 'Digitizing',
    link: '/digitizing-service',
    dropdown_menus: []
  },
  {
    id: 3,
    title: 'Vector Art',
    link: '/vector-service',
    dropdown_menus: []
  },
  {
    id: 4,
    title: 'Custom Patches',
    link: '/custom-patches-service',
    dropdown_menus: []
  },
  {
    id: 5,
    title: 'About',
    link: '/',
    dropdown_menus: [
      { title: 'About company', link: '/about-us' },
      { title: 'FAQ', link: '/faq' },
      { title: 'Pricing', link: '/pricing' },
    ]
  },
  {
    id: 6,
    title: 'Contact',
    link: '/contact-2',
    dropdown_menus: [
      { title: 'Get IN touch', link: '/contact-2' },
    ]
  }
];