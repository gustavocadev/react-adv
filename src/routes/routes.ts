import { lazy, LazyExoticComponent } from "react"
// import { LazyPage2, LazyPage3 } from "../01-lazyload/routes"
// import LazyPage1 from "../01-lazyload/routes/LazyPage3"

type JSXComponent = () => JSX.Element

type Route = {
  to: string
  path: string
  Component: LazyExoticComponent<JSXComponent> | JSXComponent
  name: string
}

const Lazy1 = lazy(() => import("../01-lazyload/routes/LazyPage1"))
const Lazy2 = lazy(() => import("../01-lazyload/routes/LazyPage2"))
const Lazy3 = lazy(() => import("../01-lazyload/routes/LazyPage3"))

export const routes: Route[] = [
  {
    to: "/lazy1",
    path: "lazy1",
    Component: Lazy1,
    name: "Lazy-1",
  },
  {
    to: "/lazy2",
    path: "lazy2",
    Component: Lazy2,
    name: "Lazy-2",
  },
  {
    to: "/lazy3",
    path: "lazy3",
    Component: Lazy3,
    name: "Lazy-3",
  },
]
