import { alertInfoOne, mockAlert } from './mock_data/mockData';

describe('Alert_info_list_info', () => {
  it('`toJSON` method returns an object with stringified enumerated values', () => {
    expect({ ...alertInfoOne }).not.toEqual(alertInfoOne.toJSON());
    expect(alertInfoOne.toJSON()).toMatchObject({
      category_list: ['Geo'],
      responseType_list: ['None'],
      urgency: 'Unknown',
      severity: 'Minor',
      certainty: 'Unlikely',
    });
  });
});

describe('Alert', () => {
  it('`toJSON` method returns an object with stringified enumerated values', () => {
    expect({ ...mockAlert }).not.toEqual(mockAlert.toJSON());
    expect(mockAlert.toJSON()).toMatchObject({
      status: 'Actual',
      msgType: 'Alert',
      scope: 'Public',
    });
    expect(mockAlert.toJSON().info_list?.[0]).toEqual(alertInfoOne.toJSON());
  });
});
