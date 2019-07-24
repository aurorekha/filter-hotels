import { hotelData, hotelFilters } from '../data';
import chai from 'chai';

chai.use(require('chai-json-schema'));
const { expect } = chai;

describe('test data', () => {
  describe ('hotelData', () => {
    const dataSchema = {
      title: 'data',
      type: 'object',
      required: ['name', 'starRating', 'facilities'],
      properties: {
        name: {
          type: 'string',
        },
        starRating: {
          type: 'number',
        },
        facilities: {
          type: 'array',
          uniqueItems: true,
          items: {
            type: 'string',
          },
        },
      },
    };

    let data;
    beforeEach(async () => {
      data = await hotelData();
    });

    it('should be an array', () => {
      expect(data).to.be.a('Array');
    });

    it('should have the right properties', () => {
      data.forEach(hotel => expect(hotel).to.be.jsonSchema(dataSchema));
    });
  });

  describe('hotelFilters()', () => {
    let data;
    beforeEach(async () => {
      data = await hotelFilters();
    });

    it('should be an array', () => {
      expect(data).to.be.a('Array');
    });

    it('should contain strings', () => {
      expect(data[0]).to.be.a('string', 'Data should comprise of strings');
    });
  });
});
