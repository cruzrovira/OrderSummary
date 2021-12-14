import {
  j as r,
  F as d,
  a as n,
  V as a,
  I as l,
  T as o,
  L as u,
  B as h,
  e as g,
  R as m,
  b as p,
  C as b,
} from "./vendor.abd1b94d.js"
const y = function () {
  const s = document.createElement("link").relList
  if (s && s.supports && s.supports("modulepreload")) return
  for (const e of document.querySelectorAll('link[rel="modulepreload"]')) c(e)
  new MutationObserver((e) => {
    for (const t of e)
      if (t.type === "childList")
        for (const i of t.addedNodes)
          i.tagName === "LINK" && i.rel === "modulepreload" && c(i)
  }).observe(document, { childList: !0, subtree: !0 })
  function f(e) {
    const t = {}
    return (
      e.integrity && (t.integrity = e.integrity),
      e.referrerpolicy && (t.referrerPolicy = e.referrerpolicy),
      e.crossorigin === "use-credentials"
        ? (t.credentials = "include")
        : e.crossorigin === "anonymous"
        ? (t.credentials = "omit")
        : (t.credentials = "same-origin"),
      t
    )
  }
  function c(e) {
    if (e.ep) return
    e.ep = !0
    const t = f(e)
    fetch(e.href, t)
  }
}
y()
var v = "./assets/pattern-background-desktop.756ba250.svg",
  w = "./assets/pattern-background-mobile.4bd958fe.svg",
  k = "./assets/illustration-hero.38d7bf58.svg",
  x = "./assets/icon-music.80cb256f.svg"
function I() {
  return r(d, {
    w: "100vw",
    minH: "100vh",
    justifyContent: "center",
    bg: " hsl(225, 100%, 94%)",
    backgroundImage: { base: w, md: v },
    backgroundSize: "100% 50%",
    backgroundRepeat: "no-repeat",
    alignItems: "flex-start",
    children: n(a, {
      w: "375px",
      mt: 10,
      rounded: 8,
      overflow: "hidden",
      shadow: "md",
      bg: "white",
      children: [
        r(l, { src: k }),
        n(a, {
          p: 8,
          spacing: 4,
          children: [
            r(o, {
              as: "h1",
              fontWeight: "bold",
              fontSize: "xl",
              children: "Order Summary",
            }),
            r(o, {
              as: "p",
              w: "80%",
              children:
                "You can now listen to millions of songs, audiobooks, and podcasts on any device anywhere you like!",
            }),
            n(d, {
              justifyContent: "space-between",
              w: "100%",
              bg: "hsl(225, 100%, 98%)",
              p: 4,
              rounded: 8,
              alignItems: "center",
              children: [
                r(l, { src: x }),
                n(a, {
                  spacing: 0,
                  children: [
                    r(o, { fontWeight: "bold", children: "Annual Plan " }),
                    r(o, { children: "$59.99/year" }),
                  ],
                }),
                r(u, { href: "#", color: "blue", children: "Change" }),
              ],
            }),
            r(h, {
              colorScheme: "blue",
              w: "100%",
              children: "Proceed to Payment",
            }),
            r(u, {
              href: "#",
              fontWeight: "bold",
              color: "gray.500",
              children: "Cancel Order",
            }),
          ],
        }),
      ],
    }),
  })
}
const L = g({})
m.render(
  r(p.StrictMode, { theme: L, children: r(b, { children: r(I, {}) }) }),
  document.getElementById("root")
)
