// gsap.to('#text1', {
//   x: 1000,
//   y: 500,
//   backgroundColor: '#9ACD32',
//   borderRadius: '50%',
//   scale: 1.5,
//   rotate: 360,
//   duration: 5,
//   delay: 1,
// })


// gsap.from('#text1', {
//   x: 1000,
//   y: 500,
//   backgroundColor: '#9ACD32',
//   borderRadius: '50%',
//   scale: 1.5,
//   rotate: 360,
//   duration: 2,
//   delay: 1,
//   repeat: -1,
//   yoyo: true
// })

// gsap.from(
//     '#text1',
//     {
//         x: 1000,
//         duration: 2,
//         stagger: 2,
//         repeat: -1
//     }
// )

const tl= gsap.timeline({repeat: 2, repeatDelay: 1})

tl.to(
    '#text1',
    {
        x: 1000,
        duration: 1
    },
)

tl.to(
    '#text1',
    {
        x: 0,
        duration: 1
    },
    10
)

tl.to(
    '#text2',
    {
        x: 1000,
        duration: 1
    },
)

tl.to(
    '#text2',
    {
        x: 0,
        duration: 1
    },
)

tl.to(
    '#text3',
    {
        x: 1000,
        duration: 1
    },
)

tl.to(
    '#text3',
    {
        x: 0,
        duration: 1
    },
)

tl.to(
    '#text4',
    {
        x: 1000,
        duration: 1
    },
)

tl.to(
    '#text4',
    {
        x: 0,
        duration: 1
    },
)