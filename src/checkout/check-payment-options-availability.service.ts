import { Injectable } from '@nestjs/common';
import axios from 'axios';
import { TamaraCountryCodeEnum, TamaraCurrencyEnum } from '../payment.enum';

// Link: https://api-reference.tamara.co/#tag/Checkout/paths/~1checkout~1payment-options-pre-check/post

@Injectable()
export class CheckPaymentOptionsAvailabilityService {
  public async checkPaymentOptionsAvailabilityRequest(input: {
    country: TamaraCountryCodeEnum;
    amount: number;
    currency: TamaraCurrencyEnum;
    phone_number: string;
  }) {
    const { country, amount, currency, phone_number } = input;
    const res = await await axios({
      method: 'POST',
      url: process.env.TAMARA_CHECK_PAYMENT_OPTIONS_AVAILABILITY_API,
      headers: {
        Authorization: `Bearer ${process.env.TAMARA_API_TOKEN}`
      },
      data: {
        country,
        order_value: {
          amount,
          currency
        },
        phone_number
      }
    });
  }
}

const req = {
  country: 'SA',
  order_value: {
    amount: '100.00',
    currency: 'SAR'
  },
  phone_number: '966503334444',
  is_vip: true
};

const res = {
  has_available_payment_options: true
};
