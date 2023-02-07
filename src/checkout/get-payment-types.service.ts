import { Injectable } from '@nestjs/common';
import axios from 'axios';
import { TamaraCountryCodeEnum, TamaraCurrencyEnum } from '../payment.enum';

// Link: https://api-reference.tamara.co/#tag/Checkout/paths/~1checkout~1payment-types/get

@Injectable()
export class GetPaymentTypeService {
  public async getPaymentTypesRequest(input: {
    country: TamaraCountryCodeEnum;
    currency?: TamaraCurrencyEnum;
    order_value?: number;
    phone?: string;
  }) {
    const { country, currency, order_value, phone } = input;
    await await axios({
      method: 'GET',
      url: process.env.TAMARA_GET_PAYMENT_TYPES_API,
      headers: {
        Authorization: `Bearer ${process.env.TAMARA_API_TOKEN}`
      },
      params: {
        country,
        currency,
        order_value,
        phone
      }
    });
  }
}

const res = [
  {
    name: 'PAY_BY_INSTALMENTS',
    description: 'Shop by instalments',
    description_ar: 'قسمها على دفعات بدون رسوم',
    min_limit: {
      amount: 100,
      currency: 'SAR'
    },
    max_limit: {
      amount: 2000,
      currency: 'SAR'
    },
    supported_instalments: [
      {
        instalments: 3,
        min_limit: {
          amount: 100,
          currency: 'SAR'
        },
        max_limit: {
          amount: 2000,
          currency: 'SAR'
        }
      },
      {
        instalments: 6,
        min_limit: {
          amount: 600,
          currency: 'SAR'
        },
        max_limit: {
          amount: 3000,
          currency: 'SAR'
        }
      }
    ]
  }
];
