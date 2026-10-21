Scenario('Created booking can be fetched', async ({ I }) => {
  const body = {
    firstname: 'Jim',
    lastname: 'Brown',
    totalprice: 111,
    depositpaid: true,
    bookingdates: { checkin: '2018-01-01', checkout: '2019-01-01' },
    additionalneeds: 'Breakfast'
  };

  const created = await I.sendPostRequest('/booking', body);
  const id = created.data.bookingid;

  await I.sendGetRequest(`/booking/${id}`);
  I.seeResponseCodeIs(200);
  I.seeResponseContainsJson({ firstname: 'Jim' });
});