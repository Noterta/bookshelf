import Root from '../../../Root';
import FloatCart from '..';
import CartProduct from '../CartProduct';

const initialState = {
  cart: {
    products: [
      {
        id: 12,
        sku: 12064273040195392,
        title: 'Ролл с тунцом',
        description: '4 MSL',
        availableSizes: ['35 г. ', '45 г.'],
        style: 'Black with custom print',
        price: 249,
        installments: 9,
        currencyId: 'Р',
        currencyFormat: 'Руб.',
        isFreeShipping: true
      },
      {
        id: 13,
        sku: 51498472915966366,
        title: 'Ролл с крветками',
        description: '',
        availableSizes: ['35 г. ', '45 г.'],
        style: 'Front print and paisley print',
        price: 320,
        installments: 5,
        currencyId: 'Р',
        currencyFormat: 'Руб.',
        isFreeShipping: true
      }
    ]
  }
};

let wrapped;

beforeEach(() => {
  wrapped = mount(
    <Root initialState={initialState}>
      <FloatCart />
    </Root>
  );
});

afterEach(() => {
  wrapped.unmount();
});

it('should mount with 2 products in it', () => {
  expect(wrapped.find(CartProduct).length).toEqual(2);
});
