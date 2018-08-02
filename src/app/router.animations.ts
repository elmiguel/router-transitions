import {
  trigger,
  animate,
  style,
  group,
  animateChild,
  query,
  stagger,
  transition
} from '@angular/animations';

export const routerTransition = trigger(
  'routerTransition', [
    transition('* => *', [
      /* order */
      /* 1 */
      query(
        ':enter, :leave',
        style({ position: 'fixed', width: '100%' })
        , { optional: true }),

      /* 2 */
      group([  // block executes in parallel
        query(':enter', [
          style({ transform: 'translateY(-200%)', opacity: 0}),
          animate('0.65s ease', style({ transform: 'translateY(0%)', opacity: 1 }))
        ], { optional: true }),

        query(':leave', [
            style({ transform: 'translateY(0%)', opacity: 1 }),
            animate('0.65s ease', style({ transform: 'translateY(-200%)', opacity: 0 }))
        ], { optional: true }),

        query(':leave .block', stagger(300, [
          style({ transform: 'translateY(0px)', opacity: 1 }),
          animate('1s cubic-bezier(.75,-0.48,.26,1.52)', style({transform: 'translateY(50rem)', opacity: 0})),
        ]), { optional: true }),
      ])
    ])
  ]
);

export const fadeAnimation = trigger('fadeAnimation', [
  transition('* => *', [
    query(
      ':enter',
      [style({ opacity: 0 })],
      { optional: true }
    ),
    query(
      ':leave',
      [style({ opacity: 1 }), animate('0.3s', style({ opacity: 0 }))],
      { optional: true }
    ),
    query(
      ':enter',
      [style({ opacity: 0 }), animate('0.3s', style({ opacity: 1 }))],
      { optional: true }
    )
  ])
]);
