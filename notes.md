# **NextJS is a famework build on top of react library**
### It includes features like routing, optimized rendering,data fetching, bundling, compiling does not need to install additional pakages 

**Used to build production ready applications**

## **why cause it provides** 
1. Routing => File based routing and app router 
2. API routes => 
3. Rendering => ssr and csr
4. Data Fetching 
5. Styling => tailwind inbuild
6. optimizations => for images, fonts and scrs
7. good for dev and prod 

public --> to serve all the static assests such as svg or images
### nextjs automatically creates layout.tsx file -->when compiling

## SSR
In next js all components are server components by default also,they have the ability to read files and fetch data from the db. however they don't have ability to use hooks or handle user interactions

## CSR
To create a client component, we add 'use client' at the top.
they are opposite of ssr components.

## Routing
### File based routing
It has a file based routing mech.It's url paths are defined using files and folders.

- not every file belong to route we have to follow some conventions defined by nextjs.
- every file that corresponds to a route should be named page.js/tsx.
- every folder corresponds to a path segment in the url.
- all routes should be inside folder named with app
- for dynamic routing create file with name inside [] brackets.
- to get the params value we will get in the props under params object with key named as folder name.
- Catch all segments route use [...fileName]
- and to access that route use params.fileName from props to get array of string
- it also provide optional catch all segments as well by using [[...fileName]] -> render docs to the same file as well using this.
- **custom not found page** --> create a file named as not-found.tsx 
- to render based on some condition use notFound function by next/navigation
- also all the page.tsx should be default exported. 
- **Private folder** --> it indicates it is privately implemented and it is excluded for the routing system it is declared by _folderName or %5F

## **Route Groups**
we can mark a folder as route group to exclude it from the path but its childs are still condered
ex-> /auth/register if we make auth folder a route group then by /register we can access the page
This can be done by naming folder in parenthesis ex--> (auth)

## Layout 
which is shared between multiple routes --> like header (outlet)

## Nested Layout 
create layout in nested files for it simple

## route group layout
it is also used to selectively apply layout to certain segments while leaving others
create route group and give it layout while having others outside the route group.

## Config the metadata 
It can be configured by exporting static meta data object
or exporting a dynamic generateMetadata Function

### metadata rules
both page.tsx and layout.tsx can export metadata. If defined in a layout, it applies to all the pages in that layout, but if defined in a page, it applies only to that page.

It is read in order from root level to final page level
when there's metadata in multiple places for the same route, they get combined, but page metadata will
replace layout metadata if they have same properties

also deeper page/layout overrids the root level's

Dynamic MetaData for dynamic routing
generateMetadata function recives props same as of page and returns metadata, also this function can be async and have a return type Promise<Metadata>

### metadata title
It can be a string or object.
title: {
    default: 'About Page Child', //fallback for child  
    template: '%s | About Page', //child replace %s with their title
    // absolute: "About Page Main" //ignores template in from parent it is absolute don't need much
  },

## UI Navigation
to enable client side navigation use Link componet form 'next/link'
<Link href = '/blog' replace>Go To Blog</Link>
it also has replace attribute which removes the page from which it came from, 
from navigation history. basically it replaces the current url from navigation history to new one

## Hooks can be used only at client side
usePathname hook --> for active links check see in example.
provides pathname constant which is the current path ex--> /blog
Don't use "use client" in layout , all pages inside this layout will be client rendered , its better to create client component contain all your links ,then use pathname inside it ,and let the layout derver rendered

