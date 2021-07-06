import {
  trigger,
  transition,
  style,
  query,
  group,
  animateChild,
  animate,
  keyframes,
  stagger
} from '@angular/animations';

export const fader = trigger('routeAnimations', [
  transition('* <=> *', [
    query(':enter, :leave', [
      style({
        position: 'absolute',
        left: 0,
        width: '100%',
        opacity: 0,
        transform: 'translateY(10%)'
      })
    ], {optional: true}),
    query(':enter', [
      animate('750ms ease',
        style({
          opacity: 1,
          transform: 'translateY(0)'
        })
      )
    ], {optional: true}),
  ])
])

export const stepper = trigger('routeAnimations', [
  transition('* <=> *', [
    query(':enter, :leave', [
      style({
        position: 'absolute',
        left: 0,
        width: '100%'
      }),
    ]),
    group([
      query(':enter', [
        animate('1000ms ease', keyframes([
          style({ transform: 'scale(0) translateX(100%)', offset: 0 }),
          style({ transform: 'scale(0.5) translateX(25%)', offset: 0.3 }),
          style({ transform: 'scale(1) translateX(0%)', offset: 1 })
        ]))
      ])
    ])
  ])
])

export const fadeIn = trigger('fadeIn', [
  transition('* => *', [
    query(':enter, :leave',
      style({ opacity: 0 }),
      {optional: true}),
    query(':enter',
      style({ opacity: 0 }),
      {optional: true}),
    query(':leave',
      style({ opacity: 1 }),
      {optional: true})
  ])
])
