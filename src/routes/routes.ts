import { lazy, LazyExoticComponent } from "react"
import NoLazy from "../01-lazyload/routes/NoLazy"
// import { LazyPage2, LazyPage3 } from "../01-lazyload/routes"
// import LazyPage1 from "../01-lazyload/routes/LazyPage3"

type JSXComponent = () => JSX.Element

type Route = {
  to: string
  path: string
  Component: LazyExoticComponent<JSXComponent> | JSXComponent
  name: string
}

const LazyLayout = lazy(() => import("../01-lazyload/layout/LazyLayout"))
// const Lazy2 = lazy(() => import("../01-lazyload/routes/LazyPage2"))
// const Lazy3 = lazy(() => import("../01-lazyload/routes/LazyPage3"))

export const routes: Route[] = [
  {
    path: "lazyload/*",
    to: "/lazyload/",
    Component: LazyLayout,
    name: "LazyLayout - Dash",
  },
  {
    to: "/no-lazy",
    path: "no-lazy",
    Component: NoLazy,
    name: "No Lazy",
  },
  // {
  //   to: "/lazy3",
  //   path: "lazy3",
  //   Component: Lazy3,
  //   name: "Lazy-3",
  // },
]
