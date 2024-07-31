# Next.js: A Framework Built on React

Next.js is a powerful framework built on top of the React library, designed to enhance and streamline the development of production-ready applications. It provides a comprehensive set of features out of the box, eliminating the need for additional packages for routing, optimized rendering, data fetching, bundling, and compiling.

## Key Features of Next.js

1. **Routing**: Next.js offers a file-based routing system and an app router for defining URL paths using files and folders.
2. **API Routes**: Simplifies the creation of API endpoints.
3. **Rendering**: Supports both Server-Side Rendering (SSR) and Client-Side Rendering (CSR).
4. **Data Fetching**: Provides multiple methods for fetching data in both SSR and CSR contexts.
5. **Styling**: Built-in support for Tailwind CSS.
6. **Optimizations**: Includes optimizations for images, fonts, and scripts.
7. **Development and Production**: Provides a smooth development experience and optimizations for production.

## Project Structure

- **public**: Serves all static assets such as SVGs or images.
- **next.config.js**: Configuration file for customizing the Next.js setup.

## Rendering in Next.js

### Server-Side Rendering (SSR)

- All components are server components by default.
- Server components can read files and fetch data from databases but cannot use hooks or handle user interactions.

### Client-Side Rendering (CSR)

- To create a client component, add `'use client'` at the top of the file.
- Client components can use hooks and handle user interactions.

## Routing in Next.js

### File-Based Routing

Next.js uses a file-based routing mechanism where URL paths are defined using files and folders.

- Not every file belongs to a route; follow conventions defined by Next.js.
- Every file corresponding to a route should be named `page.js` or `page.tsx`.
- Each folder corresponds to a path segment in the URL.
- All routes should be inside a folder named `app`.
- For dynamic routing, create a file with a name inside square brackets (e.g., `[id].js`).
- To access dynamic route parameters, use `params` from the props object.
- Use `[...]` for catch-all segments and `[[...]]` for optional catch-all segments.
- Create a custom not found page by creating a file named `not-found.tsx`.
- To conditionally render a not found page, use the `notFound` function from `next/navigation`.
- All `page.tsx` files should be default exported.
- **Private Folders**: Indicated by an underscore (`_folderName`) and excluded from the routing system.

### Route Groups

- Mark a folder as a route group to exclude it from the path but still include its child routes.
- Create a route group by naming the folder in parentheses (e.g., `(auth)`).

## Layouts

### Shared Layouts

- Layouts shared between multiple routes, like headers, can be created using the `layout.tsx` file.

### Nested Layouts

- Create nested layouts by placing `layout.tsx` files in nested folders.

### Route Group Layouts

- Use route group layouts to selectively apply layouts to certain segments while leaving others.

## Metadata Configuration

- Metadata can be configured by exporting a static metadata object or a dynamic `generateMetadata` function.
- Both `page.tsx` and `layout.tsx` can export metadata.
- Metadata is read in order from root level to the final page level.
- When there's metadata in multiple places for the same route, they get combined, but page metadata will replace layout metadata if they have the same properties.
- Deeper page/layout metadata overrides root-level metadata.
- The `generateMetadata` function receives props and returns metadata. It can be async and return a `Promise<Metadata>`.

### Metadata Title

- Titles can be a string or an object.
  ```js
  title: {
      default: 'About Page Child', // Fallback for child  
      template: '%s | About Page', // Child replaces %s with their title
  },

## UI Navigation

Use the `Link` component from `next/link` for client-side navigation.

```jsx
<Link href='/blog' replace>Go To Blog</Link>
```

## Hooks
- Hooks can only be used in client components.

### usePathname hook provides the current path, useful for active link checks.

  ```js
      const pathname = usePathname(); // e.g., '/blog'
  ```

  - Avoid using 'use client' in layout files to prevent client rendering of all pages within the layout.  
  - Instead, create a client component for links and use pathname inside it, letting the layout be server-rendered.