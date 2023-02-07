import { Injectable } from '@nestjs/common';
import axios from 'axios';
import { TamaraCountryCodeEnum, TamaraCurrencyEnum } from '../payment.enum';

// Link: https://api-reference.tamara.co/#tag/Payment/paths/~1payments~1capture/post

@Injectable()
export class CapturePaymentService {
  public async capturePaymentRequest(input: {
    order_id: string;
    total_amount: {
      amount: number;
      currency: TamaraCurrencyEnum;
    };
    tax_amount?: {
      amount: number;
      currency: TamaraCurrencyEnum;
    };
    discount_amount?: {
      amount: number;
      currency: TamaraCurrencyEnum;
    };
    shipping_amount?: {
      amount: number;
      currency: TamaraCurrencyEnum;
    };
    items?: [
      {
        reference_id: string;
        type: string;
        name: string;
        sku: string;
        image_url?: string;
        quantity: number;
        unit_price?: {
          amount: number;
          currency: TamaraCurrencyEnum;
        };
        discount_amount?: {
          amount: number;
          currency: TamaraCurrencyEnum;
        };
        tax_amount?: {
          amount: number;
          currency: TamaraCurrencyEnum;
        };
        total_amount: {
          amount: number;
          currency: TamaraCurrencyEnum;
        };
      }
    ];
    shipping_info: {
      shipped_at: Date;
      shipping_company: string;
      tracking_number?: string;
      tracking_url?: string;
    };
  }) {
    await await axios({
      method: 'POST',
      url: process.env.TAMARA_CAPTURE_PAYMENT_API,
      headers: {
        Authorization: `Bearer ${process.env.TAMARA_API_TOKEN}`
      },
      data: { ...input }
    });
  }
}
const req = {
  order_id: '7b6f0d93-8853-48d0-a769-f641a2212142',
  total_amount: {
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
    amount: '100.00',
    currency: 'SAR'
  },
  items: [{}],
  shipping_info: {
    shipped_at: '2019-08-24T14:15:22Z',
    shipping_company: 'DHL',
    tracking_number: '123456',
    tracking_url: 'https://shipping.com/tracking?id=123456'
  }
};

const res = {
  capture_id: '0a17d40a-6180-4f4b-ba7c-498ae79e30dc',
  order_id: '0a17d40a-6180-4f4b-ba7c-498ae79e30dc'
};
