const plans = [
  {
    planId: 1,
    name: '1 Month Unlimited Membership',
    limit: 'Unlimited',
    programs: 'CrossFit, Fundamental 1, Fundamental 2,\n Fundamental 3, MB Conditioning',
    commitment: '1 Months',
    cost: 219,
    paymentoptions: false,
    options: [],
  },
  {
    planId: 2,
    name: '1 Week Pass',
    limit: '21 Classes per Week',
    programs: 'CrossFit, Fundamental 1, Fundamental 2,\n Fundamental 3, MB Conditioning',
    commitment: '1 Week',
    cost: 100,
    paymentoptions: false,
    options: [],
  },
  {
    planId: 3,
    name: '1 Year Unlimited Membership',
    limit: 'Unlimited',
    programs: 'CrossFit, Fundamental 1, Fundamental 2,\n Fundamental 3, MB Conditioning',
    commitment: '12 Months',
    cost: false,
    paymentoptions: true,
    options: [
      {
        name: 'Monthly',
        price: 159,
        commitment: 12,
      },
      {
        name: 'Pay in Full',
        price: 1908,
      },
    ],
  },
  {
    planId: 4,
    name: '3 Month Unlimited Membership',
    limit: 'Unlimited',
    programs: 'CrossFit, Fundamental 1, Fundamental 2,\n Fundamental 3, MB Conditioning',
    commitment: '3 Months',
    cost: false,
    paymentoptions: true,
    options: [
      {
        name: 'Monthly',
        price: 199,
        commitment: 3,
      },
      {
        name: 'Pay in Full',
        price: 597,
      },
    ],
  },
  {
    planId: 5,
    name: '6 Month Unlimited Membership',
    limit: 'Unlimited',
    programs: 'CrossFit, Fundamental 1, Fundamental 2,\n Fundamental 3, MB Conditioning',
    commitment: '6 Months',
    cost: false,
    paymentoptions: true,
    options: [
      {
        name: 'Monthly',
        price: 179,
        commitment: 6,
      },
      {
        name: 'Pay in Full',
        price: 1074,
      },
    ],
  },
];

export default plans