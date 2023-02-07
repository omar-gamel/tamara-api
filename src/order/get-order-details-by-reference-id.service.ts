import { Injectable } from '@nestjs/common';
import axios from 'axios';

// Link: https://api-reference.tamara.co/#tag/Order/paths/~1merchants~1orders~1reference-id~1{orderReferenceId}/get

@Injectable()
export class GetOrderDetailsByReferenceIDService {
  public async getOrderDetailsByReferenceIdRequest(orderReferenceId: string) {
    await await axios({
      method: 'GET',
      url: `${process.env.TAMARA_GET_ORDER_DETAILS_BY_REFERENCE_ID_API}/${orderReferenceId}`,
      headers: {
        Authorization: `Bearer ${process.env.TAMARA_API_TOKEN}`
      }
    });
  }
}

const res = {
  order_id: 123456,
  order_reference_id: 123456,
  order_number: 'A123456',
  description: 'Order from store A',
  consumer: {
    first_name: 'Mona',
    last_name: 'Lisa',
    phone_number: '502223333',
    email: 'user@example.com'
  },
  status: 'new',
  billing_address: {
    first_name: 'Mona',
    last_name: 'Lisa',
    line1: '3764 Al Urubah Rd',
    line2: 'string',
    region: 'As Sulimaniyah',
    postal_code: '12345',
    city: 'Riyadh',
    country_code: 'SA',
    phone_number: '502223333'
  },
  shipping_address: {
    first_name: 'Mona',
    last_name: 'Lisa',
    line1: '3764 Al Urubah Rd',
    line2: 'string',
    region: 'As Sulimaniyah',
    postal_code: '12345',
    city: 'Riyadh',
    country_code: 'SA',
    phone_number: '502223333'
  },
  payment_type: 'PAY_BY_INSTALMENTS',
  instalments: 3,
  total_amount: {
    amount: '100.00',
    currency: 'SAR'
  },
  refunded_amount: {
    amount: '100.00',
    currency: 'SAR'
  },
  captured_amount: {
    amount: '100.00',
    currency: 'SAR'
  },
  tax_amount: {
    amount: '100.00',
    currency: 'SAR'
  },
  shipping_amount: {
    amount: '100.00',
    currency: 'SAR'
  },
  discount_amount: {
    name: 'Christmas 2020',
    amount: {}
  },
  canceled_amount: {
    amount: '100.00',
    currency: 'SAR'
  },
  items: [{}],
  settlement_status: 'pending',
  settlement_date: '2019-08-24T14:15:22Z',
  created_at: '2019-08-24T14:15:22Z',
  wallet_prepaid_amount: {
    amount: '100.00',
    currency: 'SAR'
  },
  transactions: {
    cancels: [
      {
        cancel_id: 'e5dda0af-978b-450a-a1ad-f644c199b61e',
        order_id: 'e5dda0af-978b-450a-a1ad-f644c199b61e',
        total_amount: {},
        items: [
          {
            reference_id: '123456',
            type: 'Digital',
            name: 'Lego City 8601',
            sku: 'SA-12436',
            image_url: 'https://www.example.com/product.jpg',
            quantity: 1,
            unit_price: {},
            discount_amount: {},
            tax_amount: {},
            total_amount: {}
          }
        ],
        created_at: '2019-08-24T14:15:22Z'
      }
    ],
    captures: [
      {
        capture_id: 'e5dda0af-978b-450a-a1ad-f644c199b61e',
        order_id: 'e5dda0af-978b-450a-a1ad-f644c199b61e',
        total_amount: {},
        refunded_amount: {},
        shipping_amount: {},
        tax_amount: {
          amount: '100.00',
          currency: 'SAR'
        },
        discount_amount: {},
        shipping_info: {},
        items: [],
        created_at: '2019-08-24T14:15:22Z'
      }
    ],
    refunds: []
  }
};
