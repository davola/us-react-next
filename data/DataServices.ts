import {ServiceType} from "../components/views/Service";

export type DataServiceType = {
    isMain: boolean;
    subView: ServiceType;
    class: string;
    image: string;
    title: string;
    short: string;
    desc: string;
    workTag: string;
    link: string;
}

export const DataServices:DataServiceType[] = [
    {
        isMain: true,
        subView: 'web-applications',
        class: "web-application",
        image: "/img/web-application-development.svg",
        title: "<span>Web application</span> <span class='display-block'>development</span>",
        short: "Web Application",
        desc: "I develop PHP and JavaScript web applications with Symfony and AngularJS",
        workTag: "web-application-development",
        link: "/work/web-application-development"
    },
    {
        isMain: true,
        subView: 'mobile-cross-platform-applications',
        class: "mobile-cross-platform",
        image: "/img/cross-platform-development.svg",
        title: "<span>Mobile cross-platform</span> <span style='display:block;'>application development</span>",
        short: "Mobile Application",
        desc: "<span>I develop mobile phonegap applications</span> <span>for iOS, Android, and Windows phone</span>",
        workTag: "mobile-development",
        link: "/work/mobile-development"
    },
    {
        isMain: true,
        subView: 'e-commerce-development',
        class: "e-commerce",
        image: "/img/online-store-development.svg",
        title: "<span>E-commerce</span> <span class='display-block'>development</span>",
        short: "E-commerce",
        desc: "<span>I develop responsive online stores</span> <span>with Woocommerce and Magento.</span>",
        workTag: "ecommerce-development",
        link: "/work/e-commerce-development"
    },
    {
        isMain: true,
        subView: 'wordpress-and-silverstripe-responsive-websites',
        class: "open-source",
        image: "/img/open-source-cms-development.svg",
        title: "<span>Responsive website</span> <span class='display-block'>development</span>",
        short: "Responsive website",
        desc: "<span>I develop responsive <span class='text-nowrap'>open-source</span> websites</span> <span>with Wordpress or Silverstripe</span>",
        workTag: "responsive-website-development",
        link: "/work/cms-responsive-website-development"
    }
]

export const DataServicesAll:DataServiceType[] = [{
    isMain: true,
    subView: 'featured',
    class: "featured",
    image: "/img/web-application-development.svg",
    title: "<span>Featured</span> <span class='display-block'>development</span>",
    short: "Featured",
    desc: "I develop PHP and JavaScript web applications with Symfony and AngularJS",
    workTag: "web-application-development",
    link: "/work"
}, ...DataServices];