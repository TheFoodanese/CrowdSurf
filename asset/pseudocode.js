/*
1. navbar with search and location
2. Pass the inputs to the events api
3. display results in small cards

Api variables we can use
geoip=true//this shows current  IP location
&range=${distance}mi





events?lat=${latitude}&lon=${longitude}&&datetime_utc.gte=${startDate}&datetime_utc.lte=${endDate};


events?client_id=${apiKey}
API URL:
https://api.seatgeek.com/2/events?lat=43.0000&lon=-73.935242&range=100mi&&datetime_utc.gte=2024-02-02&datetime_utc.lte=2024-03-03&client_id=Mzk2OTE5NzR8MTcwNjczNjQ3MS45OTA5Mjc3

Results/ Data object

{
  "events": [
    {
      "type": "mls",
      "id": 6077353,
      "datetime_utc": "2023-12-31T09:30:00",
      "venue": {
        "state": "MO",
        "name_v2": "CITYPARK",
        "postal_code": "63103",
        "name": "CITYPARK",
        "links": [ ],
        "timezone": "America/Chicago",
        "url": "https://seatgeek.com/venues/citypark/tickets",
        "score": 0.83,
        "location": {
          "lat": 38.6312,
          "lon": -90.2105
        },
        "address": "2100 Market Street",
        "country": "US",
        "has_upcoming_events": true,
        "num_upcoming_events": 1,
        "city": "St. Louis",
        "slug": "citypark",
        "extended_address": "St. Louis, MO 63103",
        "id": 223306,
        "popularity": 0,
        "access_method": {
          "method": "QRCODE",
          "created_at": "2021-10-19T21:09:46Z",
          "employee_only": false
        },
        "metro_code": 609,
        "capacity": 0,
        "display_location": "St. Louis, MO"
      },
      "datetime_tbd": true,
      "performers": [
        {
          "type": "mls",
          "name": "St. Louis CITY SC",
          "image": "https://seatgeek.com/images/performers-landscape/st-louis-city-sc-3-7d3951/793870/51611/huge.jpg",
          "id": 793870,
          "images": {
            "huge": "https://seatgeek.com/images/performers-landscape/st-louis-city-sc-3-7d3951/793870/51611/huge.jpg"
          },
          "divisions": [
            {
              "taxonomy_id": 1050100,
              "short_name": "Western",
              "display_name": "Western Conference",
              "display_type": "Conference",
              "division_level": 1,
              "slug": "western-conference"
            }
          ],
          "has_upcoming_events": true,
          "primary": true,
          "stats": {
            "event_count": 16
          },
          "taxonomies": [
            {
              "id": 1000000,
              "name": "sports",
              "parent_id": null,
              "document_source": {
                "source_type": "ELASTIC",
                "generation_type": "FULL"
              },
              "rank": 0,
              "seo_event_type": "sport"
            },
            {
              "id": 1050000,
              "name": "soccer",
              "parent_id": 1000000,
              "document_source": {
                "source_type": "ELASTIC",
                "generation_type": "FULL"
              },
              "rank": 0,
              "seo_event_type": "soccer"
            },
            {
              "id": 1050100,
              "name": "mls",
              "parent_id": 1050000,
              "document_source": {
                "source_type": "ELASTIC",
                "generation_type": "FULL"
              },
              "rank": 7,
              "seo_event_type": "mls"
            }
          ],
          "image_attribution": "cjh",
          "url": "https://seatgeek.com/st-louis-city-sc-3-tickets",
          "score": 0.75,
          "slug": "st-louis-city-sc-3",
          "home_venue_id": 223306,
          "short_name": "St Louis CITY SC",
          "num_upcoming_events": 16,
          "colors": null,
          "image_license": "cjh",
          "popularity": 0,
          "home_team": true,
          "location": {
            "lat": 38.6312,
            "lon": -90.2105
          },
          "image_rights_message": ""
        }
      ],
      "is_open": true,
      "links": [ ],
      "datetime_local": "2023-12-31T03:30:00",
      "time_tbd": true,
      "short_title": "2024 myCITY+ Membership",
      "visible_until_utc": "2024-12-31T06:00:00",
      "stats": {
        "listing_count": 3,
        "average_price": 55,
        "lowest_price_good_deals": null,
        "lowest_price": 55,
        "highest_price": 55,
        "visible_listing_count": 1,
        "dq_bucket_counts": [
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0
        ],
        "median_price": 55,
        "lowest_sg_base_price": 50,
        "lowest_sg_base_price_good_deals": null,
        "ticket_count": 72
      },
      "taxonomies": [
        {
          "id": 1000000,
          "name": "sports",
          "parent_id": null,
          "rank": 0,
          "seo_event_type": "sport"
        },
        {
          "id": 1050000,
          "name": "soccer",
          "parent_id": 1000000,
          "rank": 0,
          "seo_event_type": "soccer"
        },
        {
          "id": 1050100,
          "name": "mls",
          "parent_id": 1050000,
          "rank": 7,
          "seo_event_type": "mls"
        }
      ],
      "url": "https://seatgeek.com/st-louis-city-sc-3-tickets/mls/2023-12-31-3-30-am/6077353",
      "score": 0,
      "announce_date": "2023-01-17T00:00:00",
      "created_at": "2023-06-28T15:03:44",
      "date_tbd": true,
      "title": "2024 myCITY+ Membership",
      "popularity": 0,
      "description": "",
      "status": "normal",
      "access_method": {
        "method": "QRCODE",
        "created_at": "2021-10-19T21:09:46Z",
        "employee_only": false
      },
      "event_promotion": null,
      "announcements": { },
      "conditional": false,
      "enddatetime_utc": "2024-12-31T06:00:00",
      "visible_at": "2023-09-01T05:00:00Z",
      "is_visible_override": "UNSET",
      "tdc_pvo_id": 0,
      "tdc_pv_id": 0,
      "is_visible": true,
      "performer_order": [ ],
      "integrated": {
        "provider_name": "OPEN",
        "provider_id": "e_rVMFYgD6p0uVg15dBcRdMpNQCLN06r4"
      },
      "general_admission": true,
      "themes": [ ],
      "domain_information": [ ]
    },
    {
      "type": "concert",
      "id": 6204452,
      "datetime_utc": "2024-02-03T04:59:00",
      "venue": {
        "state": "NY",
        "name_v2": "Webster Hall",
        "postal_code": "10003",
        "name": "Webster Hall",
        "links": [ ],
        "timezone": "America/New_York",
        "url": "https://seatgeek.com/venues/webster-hall/tickets",
        "score": 0.65,
        "location": {
          "lat": 40.7318,
          "lon": -73.9892
        },
        "address": "125 East 11th Street",
        "country": "US",
        "has_upcoming_events": true,
        "num_upcoming_events": 37,
        "city": "New York",
        "slug": "webster-hall",
        "extended_address": "New York, NY 10003",
        "id": 463,
        "popularity": 0,
        "access_method": {
          "method": "QRCODE",
          "created_at": "2016-10-25T19:41:02Z",
          "employee_only": false
        },
        "metro_code": 501,
        "capacity": 2500,
        "display_location": "New York, NY"
      },
      "datetime_tbd": false,
      "performers": [
        {
          "type": "band",
          "name": "Jessica Audiffred",
          "image": "https://seatgeek.com/images/performers-landscape/jessica-audiffred-f24705/513570/huge.jpg",
          "id": 513570,
          "images": {
            "huge": "https://seatgeek.com/images/performers-landscape/jessica-audiffred-f24705/513570/huge.jpg"
          },
          "divisions": null,
          "has_upcoming_events": true,
          "primary": true,
          "stats": {
            "event_count": 8
          },
          "taxonomies": [
            {
              "id": 2000000,
              "name": "concerts",
              "parent_id": null,
              "document_source": {
                "source_type": "ELASTIC",
                "generation_type": "FULL"
              },
              "rank": 1,
              "seo_event_type": ""
            }
          ],
          "image_attribution": "SeatGeek - 2022 (2000 X 2000)",
          "url": "https://seatgeek.com/jessica-audiffred-tickets",
          "score": 0.45,
          "slug": "jessica-audiffred",
          "home_venue_id": null,
          "short_name": "Jessica Audiffred",
          "num_upcoming_events": 8,
          "colors": null,
          "image_license": "SeatGeek - 2022 (2000 X 2000)",
          "genres": [
            {
              "id": 477,
              "name": "Electronic",
              "slug": "electronic",
              "primary": true,
              "images": {
                "1200x525": "https://seatgeek.com/images/performers-landscape/sullivan-king-f1e73b/377895/1200x525.jpg",
                "1200x627": "https://seatgeek.com/images/performers-landscape/sullivan-king-d7c34c/377895/1200x627.jpg",
                "136x136": "https://seatgeek.com/images/performers-landscape/sullivan-king-876861/377895/136x136.jpg",
                "500_700": "https://seatgeek.com/images/performers-landscape/sullivan-king-55b848/377895/500_700.jpg",
                "800x320": "https://seatgeek.com/images/performers-landscape/sullivan-king-15864d/377895/800x320.jpg",
                "banner": "https://seatgeek.com/images/performers-landscape/sullivan-king-2ff76c/377895/banner.jpg",
                "block": "https://seatgeek.com/images/performers-landscape/sullivan-king-1d91a2/377895/block.jpg",
                "criteo_130_160": "https://seatgeek.com/images/performers-landscape/sullivan-king-fc713a/377895/criteo_130_160.jpg",
                "criteo_170_235": "https://seatgeek.com/images/performers-landscape/sullivan-king-a8ace9/377895/criteo_170_235.jpg",
                "criteo_205_100": "https://seatgeek.com/images/performers-landscape/sullivan-king-baf929/377895/criteo_205_100.jpg",
                "criteo_400_300": "https://seatgeek.com/images/performers-landscape/sullivan-king-aab76f/377895/criteo_400_300.jpg",
                "fb_100x72": "https://seatgeek.com/images/performers-landscape/sullivan-king-b0fe7b/377895/fb_100x72.jpg",
                "fb_600_315": "https://seatgeek.com/images/performers-landscape/sullivan-king-53c267/377895/fb_600_315.jpg",
                "huge": "https://seatgeek.com/images/performers-landscape/sullivan-king-989499/377895/huge.jpg",
                "ipad_event_modal": "https://seatgeek.com/images/performers-landscape/sullivan-king-9489e9/377895/ipad_event_modal.jpg",
                "ipad_header": "https://seatgeek.com/images/performers-landscape/sullivan-king-fee6c9/377895/ipad_header.jpg",
                "ipad_mini_explore": "https://seatgeek.com/images/performers-landscape/sullivan-king-9724e0/377895/ipad_mini_explore.jpg",
                "mongo": "https://seatgeek.com/images/performers-landscape/sullivan-king-3bc2c3/377895/mongo.jpg",
                "square_mid": "https://seatgeek.com/images/performers-landscape/sullivan-king-9e6c68/377895/square_mid.jpg",
                "triggit_fb_ad": "https://seatgeek.com/images/performers-landscape/sullivan-king-9ed6e7/377895/triggit_fb_ad.jpg"
              },
              "image": "https://seatgeek.com/images/performers-landscape/sullivan-king-989499/377895/huge.jpg",
              "document_source": {
                "source_type": "ELASTIC",
                "generation_type": "FULL"
              }
            }
          ],
          "popularity": 0,
          "location": null,
          "image_rights_message": ""
        }
      ],
      "is_open": false,
      "links": [ ],
      "datetime_local": "2024-02-02T03:30:00",
      "time_tbd": true,
      "short_title": "Jessica Audiffred (19+)",
      "visible_until_utc": "2024-02-04T01:29:00",
      "stats": {
        "listing_count": 2,
        "average_price": 61,
        "lowest_price_good_deals": null,
        "lowest_price": 44,
        "highest_price": 90,
        "visible_listing_count": 1,
        "dq_bucket_counts": null,
        "median_price": 65,
        "lowest_sg_base_price": 27,
        "lowest_sg_base_price_good_deals": null,
        "ticket_count": 6
      },
      "taxonomies": [
        {
          "id": 2000000,
          "name": "concert",
          "parent_id": null,
          "rank": 1,
          "seo_event_type": ""
        }
      ],
      "url": "https://seatgeek.com/jessica-audiffred-tickets/new-york-new-york-webster-hall-2024-02-02-3-30-am/concert/6204452",
      "score": 0.267,
      "announce_date": "2023-09-28T00:00:00",
      "created_at": "2023-09-28T19:36:43",
      "date_tbd": false,
      "title": "Jessica Audiffred (19+)",
      "popularity": 0.717,
      "description": "",
      "status": "normal",
      "access_method": {
        "method": "QRCODE",
        "created_at": "2016-10-25T19:41:02Z",
        "employee_only": false
      },
      "event_promotion": null,
      "announcements": { },
      "conditional": false,
      "enddatetime_utc": null,
      "visible_at": null,
      "is_visible_override": "VISIBLE",
      "tdc_pvo_id": 0,
      "tdc_pv_id": 0,
      "is_visible": true,
      "performer_order": [ ],
      "integrated": null,
      "general_admission": true,
      "themes": [ ],
      "domain_information": [ ]
    },
    {
      "type": "comedy",
      "id": 6375271,
      "datetime_utc": "2024-02-03T07:30:00",
      "venue": {
        "state": "NV",
        "name_v2": "Jimmy Kimmel's Comedy Club at the Linq Promenade",
        "postal_code": "89109",
        "name": "Jimmy Kimmel's Comedy Club at the Linq Promenade",
        "links": [ ],
        "timezone": "America/Los_Angeles",
        "url": "https://seatgeek.com/venues/jimmy-kimmel-s-comedy-club-at-the-linq-promenade/tickets",
        "score": 0.58,
        "location": {
          "lat": 36.1182,
          "lon": -115.171
        },
        "address": "3535 South Las Vegas Boulevard",
        "country": "US",
        "has_upcoming_events": true,
        "num_upcoming_events": 548,
        "city": "Las Vegas",
        "slug": "jimmy-kimmel-s-comedy-club-at-the-linq-promenade",
        "extended_address": "Las Vegas, NV 89109",
        "id": 469337,
        "popularity": 0,
        "access_method": null,
        "metro_code": 839,
        "capacity": 0,
        "display_location": "Las Vegas, NV"
      },
      "datetime_tbd": false,
      "performers": [
        {
          "type": "theater_comedy",
          "name": "Show Your Skillz",
          "image": "https://seatgeek.com/images/performers-landscape/show-your-skillz-4a3877/809757/huge.jpg",
          "id": 809757,
          "images": {
            "huge": "https://seatgeek.com/images/performers-landscape/show-your-skillz-4a3877/809757/huge.jpg"
          },
          "divisions": null,
          "has_upcoming_events": true,
          "primary": true,
          "stats": {
            "event_count": 12
          },
          "taxonomies": [
            {
              "id": 3000000,
              "name": "theater",
              "parent_id": null,
              "document_source": {
                "source_type": "ELASTIC",
                "generation_type": "FULL"
              },
              "rank": 8,
              "seo_event_type": "theater"
            },
            {
              "id": 3040000,
              "name": "comedy",
              "parent_id": 3000000,
              "document_source": {
                "source_type": "ELASTIC",
                "generation_type": "FULL"
              },
              "rank": 9,
              "seo_event_type": "comedy"
            }
          ],
          "image_attribution": "SeatGeek - 2022 (2000 X 2000)",
          "url": "https://seatgeek.com/show-your-skillz-tickets",
          "score": 0.26,
          "slug": "show-your-skillz",
          "home_venue_id": null,
          "short_name": "Show Your Skillz",
          "num_upcoming_events": 12,
          "colors": null,
          "image_license": "SeatGeek - 2022 (2000 X 2000)",
          "popularity": 0,
          "location": null,
          "image_rights_message": ""
        }
      ],
      "is_open": false,
      "links": [ ],
      "datetime_local": "2024-02-02T23:30:00",
      "time_tbd": false,
      "short_title": "Show Your Skillz - Las Vegas",
      "visible_until_utc": "2024-02-03T11:30:00",
      "stats": {
        "listing_count": null,
        "average_price": null,
        "lowest_price_good_deals": null,
        "lowest_price": null,
        "highest_price": null,
        "visible_listing_count": null,
        "dq_bucket_counts": null,
        "median_price": null,
        "lowest_sg_base_price": null,
        "lowest_sg_base_price_good_deals": null,
        "ticket_count": null
      },
      "taxonomies": [
        {
          "id": 3000000,
          "name": "theater",
          "parent_id": null,
          "rank": 8,
          "seo_event_type": "theater"
        },
        {
          "id": 3040000,
          "name": "comedy",
          "parent_id": 3000000,
          "rank": 9,
          "seo_event_type": "comedy"
        }
      ],
      "url": "https://seatgeek.com/show-your-skillz-tickets/comedy/2024-02-02-11-30-pm/6375271",
      "score": 0.225,
      "announce_date": "2024-01-31T00:00:00",
      "created_at": "2024-01-31T18:19:17",
      "date_tbd": false,
      "title": "Show Your Skillz - Las Vegas",
      "popularity": 0.696,
      "description": "",
      "status": "normal",
      "access_method": null,
      "event_promotion": null,
      "announcements": { },
      "conditional": false,
      "enddatetime_utc": null,
      "visible_at": null,
      "is_visible_override": "VISIBLE",
      "tdc_pvo_id": 0,
      "tdc_pv_id": 0,
      "is_visible": true,
      "performer_order": [ ],
      "integrated": null,
      "themes": [ ],
      "domain_information": [ ]
    },
    {
      "type": "ncaa_basketball",
      "id": 6354908,
      "datetime_utc": "2024-02-03T08:30:00",
      "venue": {
        "state": "NH",
        "name_v2": "Leede Arena",
        "postal_code": "03755",
        "name": "Leede Arena",
        "links": [ ],
        "timezone": "America/New_York",
        "url": "https://seatgeek.com/venues/leede-arena/tickets",
        "score": 0.37,
        "location": {
          "lat": 43.7022,
          "lon": -72.2896
        },
        "address": "6016 McNutt Hall",
        "country": "US",
        "has_upcoming_events": true,
        "num_upcoming_events": 7,
        "city": "Hanover",
        "slug": "leede-arena",
        "extended_address": "Hanover, NH 03755",
        "id": 4202,
        "popularity": 0,
        "access_method": null,
        "metro_code": 523,
        "capacity": 2100,
        "display_location": "Hanover, NH"
      },
      "datetime_tbd": false,
      "performers": [
        {
          "type": "ncaa_basketball",
          "name": "Dartmouth Big Green Mens Basketball",
          "image": "https://seatgeek.com/images/performers-landscape/dartmouth-big-green-mens-basketball-33b909/6369/huge.jpg",
          "id": 6369,
          "images": {
            "huge": "https://seatgeek.com/images/performers-landscape/dartmouth-big-green-mens-basketball-33b909/6369/huge.jpg"
          },
          "divisions": [
            {
              "taxonomy_id": 1030200,
              "short_name": null,
              "display_name": "Division I",
              "display_type": "Division",
              "division_level": 1,
              "slug": null
            },
            {
              "taxonomy_id": 1030200,
              "short_name": "Ivy League",
              "display_name": "Ivy League",
              "display_type": "Conference",
              "division_level": 2,
              "slug": "ivy-league"
            }
          ],
          "has_upcoming_events": true,
          "primary": true,
          "stats": {
            "event_count": 9
          },
          "taxonomies": [
            {
              "id": 1000000,
              "name": "sports",
              "parent_id": null,
              "document_source": {
                "source_type": "ELASTIC",
                "generation_type": "FULL"
              },
              "rank": 0,
              "seo_event_type": "sport"
            },
            {
              "id": 1030000,
              "name": "basketball",
              "parent_id": 1000000,
              "document_source": {
                "source_type": "ELASTIC",
                "generation_type": "FULL"
              },
              "rank": 0,
              "seo_event_type": "basketball"
            },
            {
              "id": 1030200,
              "name": "ncaa_basketball",
              "parent_id": 1030000,
              "document_source": {
                "source_type": "ELASTIC",
                "generation_type": "FULL"
              },
              "rank": 5,
              "seo_event_type": "ncaa-basketball"
            }
          ],
          "image_attribution": "SeatGeek - 2022 (2000 X 2000)",
          "url": "https://seatgeek.com/dartmouth-big-green-mens-basketball-tickets",
          "score": 0.4,
          "slug": "dartmouth-big-green-mens-basketball",
          "home_venue_id": 4202,
          "short_name": "Dartmouth",
          "num_upcoming_events": 9,
          "colors": null,
          "image_license": "SeatGeek - 2022 (2000 X 2000)",
          "popularity": 0,
          "home_team": true,
          "location": {
            "lat": 43.7022,
            "lon": -72.2896
          },
          "image_rights_message": ""
        },
        {
          "type": "ncaa_basketball",
          "name": "Columbia Lions Mens Basketball",
          "image": "https://seatgeek.com/images/performers-landscape/columbia-lions-mens-basketball-b9e42e/6544/huge.jpg",
          "id": 6544,
          "images": {
            "huge": "https://seatgeek.com/images/performers-landscape/columbia-lions-mens-basketball-b9e42e/6544/huge.jpg"
          },
          "divisions": [
            {
              "taxonomy_id": 1030200,
              "short_name": null,
              "display_name": "Division I",
              "display_type": "Division",
              "division_level": 1,
              "slug": null
            },
            {
              "taxonomy_id": 1030200,
              "short_name": "Ivy League",
              "display_name": "Ivy League",
              "display_type": "Conference",
              "division_level": 2,
              "slug": "ivy-league"
            }
          ],
          "has_upcoming_events": true,
          "stats": {
            "event_count": 9
          },
          "taxonomies": [
            {
              "id": 1000000,
              "name": "sports",
              "parent_id": null,
              "document_source": {
                "source_type": "ELASTIC",
                "generation_type": "FULL"
              },
              "rank": 0,
              "seo_event_type": "sport"
            },
            {
              "id": 1030000,
              "name": "basketball",
              "parent_id": 1000000,
              "document_source": {
                "source_type": "ELASTIC",
                "generation_type": "FULL"
              },
              "rank": 0,
              "seo_event_type": "basketball"
            },
            {
              "id": 1030200,
              "name": "ncaa_basketball",
              "parent_id": 1030000,
              "document_source": {
                "source_type": "ELASTIC",
                "generation_type": "FULL"
              },
              "rank": 5,
              "seo_event_type": "ncaa-basketball"
            }
          ],
          "image_attribution": "SeatGeek - 2022 (2000 X 2000)",
          "url": "https://seatgeek.com/columbia-lions-mens-basketball-tickets",
          "score": 0.39,
          "slug": "columbia-lions-mens-basketball",
          "home_venue_id": 4189,
          "short_name": "Columbia",
          "num_upcoming_events": 9,
          "colors": null,
          "image_license": "SeatGeek - 2022 (2000 X 2000)",
          "popularity": 0,
          "away_team": true,
          "location": {
            "lat": 40.8102,
            "lon": -73.9618
          },
          "image_rights_message": ""
        }
      ],
      "is_open": false,
      "links": [ ],
      "datetime_local": "2024-02-03T03:30:00",
      "time_tbd": true,
      "short_title": "Columbia at Dartmouth",
      "visible_until_utc": "2024-02-04T05:00:00",
      "stats": {
        "listing_count": null,
        "average_price": null,
        "lowest_price_good_deals": null,
        "lowest_price": null,
        "highest_price": null,
        "visible_listing_count": null,
        "dq_bucket_counts": null,
        "median_price": null,
        "lowest_sg_base_price": null,
        "lowest_sg_base_price_good_deals": null,
        "ticket_count": null
      },
      "taxonomies": [
        {
          "id": 1000000,
          "name": "sports",
          "parent_id": null,
          "rank": 0,
          "seo_event_type": "sport"
        },
        {
          "id": 1030000,
          "name": "basketball",
          "parent_id": 1000000,
          "rank": 0,
          "seo_event_type": "basketball"
        },
        {
          "id": 1030200,
          "name": "ncaa_basketball",
          "parent_id": 1030000,
          "rank": 5,
          "seo_event_type": "ncaa-basketball"
        }
      ],
      "url": "https://seatgeek.com/dartmouth-big-green-mens-basketball-tickets/ncaa-basketball/2024-02-03-3-30-am/6354908",
      "score": 0.216,
      "announce_date": "2024-01-21T00:00:00",
      "created_at": "2024-01-21T05:56:01",
      "date_tbd": false,
      "title": "Columbia Lions at Dartmouth Big Green Mens Basketball",
      "popularity": 0.686,
      "description": "",
      "status": "normal",
      "access_method": null,
      "event_promotion": null,
      "announcements": { },
      "conditional": false,
      "enddatetime_utc": null,
      "visible_at": "2024-01-21T07:39:54Z",
      "is_visible_override": "UNSET",
      "tdc_pvo_id": 0,
      "tdc_pv_id": 0,
      "is_visible": true,
      "performer_order": [ ],
      "integrated": null,
      "themes": [ ],
      "domain_information": [ ]
    },
    {
      "type": "concert",
      "id": 6239095,
      "datetime_utc": "2024-02-03T08:30:00",
      "venue": {
        "state": "ON",
        "name_v2": "Horseshoe Tavern",
        "postal_code": "M5V 2A2",
        "name": "Horseshoe Tavern",
        "links": [ ],
        "timezone": "America/Toronto",
        "url": "https://seatgeek.com/venues/horseshoe-tavern/tickets",
        "score": 0.44,
        "location": {
          "lat": 43.6491,
          "lon": -79.3959
        },
        "address": "370 Queen Street West",
        "country": "Canada",
        "has_upcoming_events": true,
        "num_upcoming_events": 19,
        "city": "Toronto",
        "slug": "horseshoe-tavern",
        "extended_address": "Toronto, Canada",
        "id": 1941,
        "popularity": 0,
        "access_method": null,
        "metro_code": 0,
        "capacity": 0,
        "display_location": "Toronto, Canada"
      },
      "datetime_tbd": false,
      "performers": [
        {
          "type": "band",
          "name": "Jaime Wyatt",
          "image": "https://seatgeek.com/images/performers-landscape/jaime-wyatt-fbdd19/157285/huge.jpg",
          "id": 157285,
          "images": {
            "huge": "https://seatgeek.com/images/performers-landscape/jaime-wyatt-fbdd19/157285/huge.jpg"
          },
          "divisions": null,
          "has_upcoming_events": true,
          "primary": true,
          "stats": {
            "event_count": 11
          },
          "taxonomies": [
            {
              "id": 2000000,
              "name": "concerts",
              "parent_id": null,
              "document_source": {
                "source_type": "ELASTIC",
                "generation_type": "FULL"
              },
              "rank": 1,
              "seo_event_type": ""
            }
          ],
          "image_attribution": "SeatGeek - 2022 (2000 X 2000)",
          "url": "https://seatgeek.com/jaime-wyatt-tickets",
          "score": 0.45,
          "slug": "jaime-wyatt",
          "home_venue_id": null,
          "short_name": "Jaime Wyatt",
          "num_upcoming_events": 11,
          "colors": null,
          "image_license": "SeatGeek - 2022 (2000 X 2000)",
          "popularity": 0,
          "location": null,
          "image_rights_message": ""
        }
      ],
      "is_open": false,
      "links": [ ],
      "datetime_local": "2024-02-03T03:30:00",
      "time_tbd": true,
      "short_title": "Jaime Wyatt (19+)",
      "visible_until_utc": "2024-02-04T05:00:00",
      "stats": {
        "listing_count": 4,
        "average_price": 102,
        "lowest_price_good_deals": null,
        "lowest_price": 34,
        "highest_price": 119,
        "visible_listing_count": 4,
        "dq_bucket_counts": null,
        "median_price": 103,
        "lowest_sg_base_price": 19,
        "lowest_sg_base_price_good_deals": null,
        "ticket_count": 14
      },
      "taxonomies": [
        {
          "id": 2000000,
          "name": "concert",
          "parent_id": null,
          "rank": 1,
          "seo_event_type": ""
        }
      ],
      "url": "https://seatgeek.com/jaime-wyatt-tickets/toronto-canada-horseshoe-tavern-2024-02-03-3-30-am/concert/6239095",
      "score": 0.195,
      "announce_date": "2023-10-18T00:00:00",
      "created_at": "2023-10-18T10:55:53",
      "date_tbd": false,
      "title": "Jaime Wyatt (19+)",
      "popularity": 0.674,
      "description": "",
      "status": "normal",
      "access_method": null,
      "event_promotion": null,
      "announcements": { },
      "conditional": false,
      "enddatetime_utc": null,
      "visible_at": "2023-10-18T12:07:55Z",
      "is_visible_override": "UNSET",
      "tdc_pvo_id": 0,
      "tdc_pv_id": 0,
      "is_visible": true,
      "performer_order": [ ],
      "integrated": null,
      "themes": [ ],
      "domain_information": [ ]
    },
    {
      "type": "ncaa_basketball",
      "id": 6195282,
      "datetime_utc": "2024-02-03T08:30:00",
      "venue": {
        "state": "IN",
        "name_v2": "Hulman Center",
        "postal_code": "47809",
        "name": "Hulman Center",
        "links": [ ],
        "timezone": "America/Indiana/Indianapolis",
        "url": "https://seatgeek.com/venues/hulman-center/tickets",
        "score": 0.45,
        "location": {
          "lat": 39.4685,
          "lon": -87.4057
        },
        "address": "200 N 8th St",
        "country": "US",
        "has_upcoming_events": true,
        "num_upcoming_events": 10,
        "city": "Terre Haute",
        "slug": "hulman-center",
        "extended_address": "Terre Haute, IN 47809",
        "id": 4220,
        "popularity": 0,
        "access_method": null,
        "metro_code": 581,
        "capacity": 10200,
        "display_location": "Terre Haute, IN"
      },
      "datetime_tbd": false,
      "performers": [
        {
          "type": "ncaa_basketball",
          "name": "Indiana State Sycamores Mens Basketball",
          "image": "https://seatgeek.com/images/performers-landscape/indiana-state-sycamores-mens-basketball-1657e8/6410/huge.jpg",
          "id": 6410,
          "images": {
            "huge": "https://seatgeek.com/images/performers-landscape/indiana-state-sycamores-mens-basketball-1657e8/6410/huge.jpg"
          },
          "divisions": [
            {
              "taxonomy_id": 1030200,
              "short_name": null,
              "display_name": "Division I",
              "display_type": "Division",
              "division_level": 1,
              "slug": null
            },
            {
              "taxonomy_id": 1030200,
              "short_name": "Missouri Valley",
              "display_name": "Missouri Valley",
              "display_type": "Conference",
              "division_level": 2,
              "slug": "missouri-valley"
            }
          ],
          "has_upcoming_events": true,
          "primary": true,
          "stats": {
            "event_count": 8
          },
          "taxonomies": [
            {
              "id": 1000000,
              "name": "sports",
              "parent_id": null,
              "document_source": {
                "source_type": "ELASTIC",
                "generation_type": "FULL"
              },
              "rank": 0,
              "seo_event_type": "sport"
            },
            {
              "id": 1030000,
              "name": "basketball",
              "parent_id": 1000000,
              "document_source": {
                "source_type": "ELASTIC",
                "generation_type": "FULL"
              },
              "rank": 0,
              "seo_event_type": "basketball"
            },
            {
              "id": 1030200,
              "name": "ncaa_basketball",
              "parent_id": 1030000,
              "document_source": {
                "source_type": "ELASTIC",
                "generation_type": "FULL"
              },
              "rank": 5,
              "seo_event_type": "ncaa-basketball"
            }
          ],
          "image_attribution": "SeatGeek - 2022 (2000 X 2000)",
          "url": "https://seatgeek.com/indiana-state-sycamores-mens-basketball-tickets",
          "score": 0.55,
          "slug": "indiana-state-sycamores-mens-basketball",
          "home_venue_id": 4220,
          "short_name": "Indiana State",
          "num_upcoming_events": 8,
          "colors": null,
          "image_license": "SeatGeek - 2022 (2000 X 2000)",
          "popularity": 0,
          "home_team": true,
          "location": {
            "lat": 39.4685,
            "lon": -87.4057
          },
          "image_rights_message": ""
        },
        {
          "type": "ncaa_basketball",
          "name": "Drake Bulldogs Mens Basketball",
          "image": "https://seatgeek.com/images/performers-landscape/drake-bulldogs-mens-basketball-e134cc/6586/huge.jpg",
          "id": 6586,
          "images": {
            "huge": "https://seatgeek.com/images/performers-landscape/drake-bulldogs-mens-basketball-e134cc/6586/huge.jpg"
          },
          "divisions": [
            {
              "taxonomy_id": 1030200,
              "short_name": null,
              "display_name": "Division I",
              "display_type": "Division",
              "division_level": 1,
              "slug": null
            },
            {
              "taxonomy_id": 1030200,
              "short_name": "Missouri Valley",
              "display_name": "Missouri Valley",
              "display_type": "Conference",
              "division_level": 2,
              "slug": "missouri-valley"
            }
          ],
          "has_upcoming_events": true,
          "stats": {
            "event_count": 8
          },
          "taxonomies": [
            {
              "id": 1000000,
              "name": "sports",
              "parent_id": null,
              "document_source": {
                "source_type": "ELASTIC",
                "generation_type": "FULL"
              },
              "rank": 0,
              "seo_event_type": "sport"
            },
            {
              "id": 1030000,
              "name": "basketball",
              "parent_id": 1000000,
              "document_source": {
                "source_type": "ELASTIC",
                "generation_type": "FULL"
              },
              "rank": 0,
              "seo_event_type": "basketball"
            },
            {
              "id": 1030200,
              "name": "ncaa_basketball",
              "parent_id": 1030000,
              "document_source": {
                "source_type": "ELASTIC",
                "generation_type": "FULL"
              },
              "rank": 5,
              "seo_event_type": "ncaa-basketball"
            }
          ],
          "image_attribution": "SeatGeek - 2022 (2000 X 2000)",
          "url": "https://seatgeek.com/drake-bulldogs-mens-basketball-tickets",
          "score": 0.49,
          "slug": "drake-bulldogs-mens-basketball",
          "home_venue_id": 5165,
          "short_name": "Drake",
          "num_upcoming_events": 8,
          "colors": null,
          "image_license": "SeatGeek - 2022 (2000 X 2000)",
          "popularity": 0,
          "away_team": true,
          "location": {
            "lat": 41.6041,
            "lon": -93.6516
          },
          "image_rights_message": ""
        }
      ],
      "is_open": false,
      "links": [ ],
      "datetime_local": "2024-02-03T03:30:00",
      "time_tbd": true,
      "short_title": "Drake at Indiana State",
      "visible_until_utc": "2024-02-04T05:00:00",
      "stats": {
        "listing_count": 21,
        "average_price": 56,
        "lowest_price_good_deals": null,
        "lowest_price": 41,
        "highest_price": 93,
        "visible_listing_count": 21,
        "dq_bucket_counts": null,
        "median_price": 53,
        "lowest_sg_base_price": 25,
        "lowest_sg_base_price_good_deals": null,
        "ticket_count": 242
      },
      "taxonomies": [
        {
          "id": 1000000,
          "name": "sports",
          "parent_id": null,
          "rank": 0,
          "seo_event_type": "sport"
        },
        {
          "id": 1030000,
          "name": "basketball",
          "parent_id": 1000000,
          "rank": 0,
          "seo_event_type": "basketball"
        },
        {
          "id": 1030200,
          "name": "ncaa_basketball",
          "parent_id": 1030000,
          "rank": 5,
          "seo_event_type": "ncaa-basketball"
        }
      ],
      "url": "https://seatgeek.com/indiana-state-sycamores-mens-basketball-tickets/ncaa-basketball/2024-02-03-3-30-am/6195282",
      "score": 0.512,
      "announce_date": "2023-09-22T00:00:00",
      "created_at": "2023-09-22T17:21:18",
      "date_tbd": false,
      "title": "Drake Bulldogs at Indiana State Sycamores Mens Basketball",
      "popularity": 0.825,
      "description": "",
      "status": "normal",
      "access_method": null,
      "event_promotion": null,
      "announcements": { },
      "conditional": false,
      "enddatetime_utc": null,
      "visible_at": null,
      "is_visible_override": "VISIBLE",
      "tdc_pvo_id": 0,
      "tdc_pv_id": 0,
      "is_visible": true,
      "performer_order": [ ],
      "integrated": null,
      "themes": [ ],
      "domain_information": [ ]
    },
    {
      "type": "ncaa_hockey",
      "id": 6160300,
      "datetime_utc": "2024-02-03T08:30:00",
      "venue": {
        "state": "CT",
        "name_v2": "M&T Bank Arena",
        "postal_code": "06518",
        "name": "M&T Bank Arena",
        "links": [ ],
        "timezone": "America/New_York",
        "url": "https://seatgeek.com/venues/m-t-bank-arena/tickets",
        "score": 0.45,
        "location": {
          "lat": 41.4156,
          "lon": -72.9111
        },
        "address": "305 Sherman Ave.",
        "country": "US",
        "has_upcoming_events": true,
        "num_upcoming_events": 4,
        "city": "Hamden",
        "slug": "m-t-bank-arena",
        "extended_address": "Hamden, CT 06518",
        "id": 4186,
        "popularity": 0,
        "access_method": null,
        "metro_code": 533,
        "capacity": 3570,
        "display_location": "Hamden, CT"
      },
      "datetime_tbd": false,
      "performers": [
        {
          "type": "ncaa_hockey",
          "name": "Quinnipiac Bobcats Mens Hockey",
          "image": "https://seatgeek.com/images/performers-landscape/quinnipiac-bobcats-mens-hockey-1-17275f/9836/huge.jpg",
          "id": 9836,
          "images": {
            "huge": "https://seatgeek.com/images/performers-landscape/quinnipiac-bobcats-mens-hockey-1-17275f/9836/huge.jpg"
          },
          "divisions": null,
          "has_upcoming_events": true,
          "primary": true,
          "stats": {
            "event_count": 5
          },
          "taxonomies": [
            {
              "id": 1000000,
              "name": "sports",
              "parent_id": null,
              "document_source": {
                "source_type": "ELASTIC",
                "generation_type": "FULL"
              },
              "rank": 0,
              "seo_event_type": "sport"
            },
            {
              "id": 1040000,
              "name": "hockey",
              "parent_id": 1000000,
              "document_source": {
                "source_type": "ELASTIC",
                "generation_type": "FULL"
              },
              "rank": 0,
              "seo_event_type": "hockey"
            },
            {
              "id": 1040200,
              "name": "ncaa_hockey",
              "parent_id": 1040000,
              "document_source": {
                "source_type": "ELASTIC",
                "generation_type": "FULL"
              },
              "rank": 0,
              "seo_event_type": "ncaa-hockey"
            }
          ],
          "image_attribution": "SeatGeek - 2022",
          "url": "https://seatgeek.com/quinnipiac-bobcats-mens-hockey-1-tickets",
          "score": 0.5,
          "slug": "quinnipiac-bobcats-mens-hockey-1",
          "home_venue_id": 4186,
          "short_name": "Quinnipiac Bobcats Mens Hockey",
          "num_upcoming_events": 5,
          "colors": null,
          "image_license": "SeatGeek - 2022",
          "popularity": 0,
          "home_team": true,
          "location": {
            "lat": 41.4156,
            "lon": -72.9111
          },
          "image_rights_message": ""
        },
        {
          "type": "ncaa_hockey",
          "name": "Dartmouth Big Green Mens Hockey",
          "image": "https://seatgeek.com/images/performers-landscape/dartmouth-big-green-mens-hockey-1-5923d1/9813/huge.jpg",
          "id": 9813,
          "images": {
            "huge": "https://seatgeek.com/images/performers-landscape/dartmouth-big-green-mens-hockey-1-5923d1/9813/huge.jpg"
          },
          "divisions": null,
          "has_upcoming_events": true,
          "stats": {
            "event_count": 2
          },
          "taxonomies": [
            {
              "id": 1000000,
              "name": "sports",
              "parent_id": null,
              "document_source": {
                "source_type": "ELASTIC",
                "generation_type": "FULL"
              },
              "rank": 0,
              "seo_event_type": "sport"
            },
            {
              "id": 1040000,
              "name": "hockey",
              "parent_id": 1000000,
              "document_source": {
                "source_type": "ELASTIC",
                "generation_type": "FULL"
              },
              "rank": 0,
              "seo_event_type": "hockey"
            },
            {
              "id": 1040200,
              "name": "ncaa_hockey",
              "parent_id": 1040000,
              "document_source": {
                "source_type": "ELASTIC",
                "generation_type": "FULL"
              },
              "rank": 0,
              "seo_event_type": "ncaa-hockey"
            }
          ],
          "image_attribution": "SeatGeek - 2022 (2000 X 2000)",
          "url": "https://seatgeek.com/dartmouth-big-green-mens-hockey-1-tickets",
          "score": 0.35,
          "slug": "dartmouth-big-green-mens-hockey-1",
          "home_venue_id": 5524,
          "short_name": "Dartmouth Big Green Mens Hockey",
          "num_upcoming_events": 2,
          "colors": null,
          "image_license": "SeatGeek - 2022 (2000 X 2000)",
          "popularity": 0,
          "away_team": true,
          "location": {
            "lat": 43.6993,
            "lon": -72.2829
          },
          "image_rights_message": ""
        }
      ],
      "is_open": false,
      "links": [ ],
      "datetime_local": "2024-02-03T03:30:00",
      "time_tbd": true,
      "short_title": "Dartmouth Big Green at Quinnipiac Bobcats Mens Hockey",
      "visible_until_utc": "2024-02-04T05:00:00",
      "stats": {
        "listing_count": 5,
        "average_price": 74,
        "lowest_price_good_deals": null,
        "lowest_price": 34,
        "highest_price": 109,
        "visible_listing_count": 5,
        "dq_bucket_counts": null,
        "median_price": 87,
        "lowest_sg_base_price": 20,
        "lowest_sg_base_price_good_deals": null,
        "ticket_count": 22
      },
      "taxonomies": [
        {
          "id": 1000000,
          "name": "sports",
          "parent_id": null,
          "rank": 0,
          "seo_event_type": "sport"
        },
        {
          "id": 1040000,
          "name": "hockey",
          "parent_id": 1000000,
          "rank": 0,
          "seo_event_type": "hockey"
        },
        {
          "id": 1040200,
          "name": "ncaa_hockey",
          "parent_id": 1040000,
          "rank": 0,
          "seo_event_type": "ncaa-hockey"
        }
      ],
      "url": "https://seatgeek.com/quinnipiac-bobcats-mens-hockey-1-tickets/ncaa-hockey/2024-02-03-3-30-am/6160300",
      "score": 0.273,
      "announce_date": "2023-08-30T00:00:00",
      "created_at": "2023-08-30T15:12:18",
      "date_tbd": false,
      "title": "Dartmouth Big Green at Quinnipiac Bobcats Mens Hockey",
      "popularity": 0.717,
      "description": "",
      "status": "normal",
      "access_method": null,
      "event_promotion": null,
      "announcements": { },
      "conditional": false,
      "enddatetime_utc": null,
      "visible_at": null,
      "is_visible_override": "VISIBLE",
      "tdc_pvo_id": 0,
      "tdc_pv_id": 0,
      "is_visible": true,
      "performer_order": [ ],
      "integrated": null,
      "themes": [ ],
      "domain_information": [ ]
    },
    {
      "type": "ncaa_basketball",
      "id": 6195761,
      "datetime_utc": "2024-02-03T09:30:00",
      "venue": {
        "state": "IN",
        "name_v2": "Athletics-Recreation Center",
        "postal_code": "46383",
        "name": "Athletics-Recreation Center",
        "links": [ ],
        "timezone": "America/Chicago",
        "url": "https://seatgeek.com/venues/athletics-recreation-center/tickets",
        "score": 0.38,
        "location": {
          "lat": 41.4642,
          "lon": -87.0484
        },
        "address": "1009 Union Street",
        "country": "US",
        "has_upcoming_events": true,
        "num_upcoming_events": 11,
        "city": "Valparaiso",
        "slug": "athletics-recreation-center",
        "extended_address": "Valparaiso, IN 46383",
        "id": 4181,
        "popularity": 0,
        "access_method": null,
        "metro_code": 602,
        "capacity": 0,
        "display_location": "Valparaiso, IN"
      },
      "datetime_tbd": false,
      "performers": [
        {
          "type": "ncaa_basketball",
          "name": "Valparaiso Beacons Mens Basketball",
          "image": "https://seatgeek.com/images/performers-landscape/valparaiso-beacons-mens-basketball-c362ad/6432/huge.jpg",
          "id": 6432,
          "images": {
            "huge": "https://seatgeek.com/images/performers-landscape/valparaiso-beacons-mens-basketball-c362ad/6432/huge.jpg"
          },
          "divisions": [
            {
              "taxonomy_id": 1030200,
              "short_name": null,
              "display_name": "Division I",
              "display_type": "Division",
              "division_level": 1,
              "slug": null
            },
            {
              "taxonomy_id": 1030200,
              "short_name": "Missouri Valley",
              "display_name": "Missouri Valley",
              "display_type": "Conference",
              "division_level": 2,
              "slug": "missouri-valley"
            }
          ],
          "has_upcoming_events": true,
          "primary": true,
          "stats": {
            "event_count": 9
          },
          "taxonomies": [
            {
              "id": 1000000,
              "name": "sports",
              "parent_id": null,
              "document_source": {
                "source_type": "ELASTIC",
                "generation_type": "FULL"
              },
              "rank": 0,
              "seo_event_type": "sport"
            },
            {
              "id": 1030000,
              "name": "basketball",
              "parent_id": 1000000,
              "document_source": {
                "source_type": "ELASTIC",
                "generation_type": "FULL"
              },
              "rank": 0,
              "seo_event_type": "basketball"
            },
            {
              "id": 1030200,
              "name": "ncaa_basketball",
              "parent_id": 1030000,
              "document_source": {
                "source_type": "ELASTIC",
                "generation_type": "FULL"
              },
              "rank": 5,
              "seo_event_type": "ncaa-basketball"
            }
          ],
          "image_attribution": "SeatGeek - 2022 (2000 X 2000)",
          "url": "https://seatgeek.com/valparaiso-beacons-mens-basketball-tickets",
          "score": 0.41,
          "slug": "valparaiso-beacons-mens-basketball",
          "home_venue_id": 4181,
          "short_name": "Valparaiso",
          "num_upcoming_events": 9,
          "colors": null,
          "image_license": "SeatGeek - 2022 (2000 X 2000)",
          "popularity": 0,
          "home_team": true,
          "location": {
            "lat": 41.4642,
            "lon": -87.0484
          },
          "image_rights_message": ""
        },
        {
          "type": "ncaa_basketball",
          "name": "Evansville Purple Aces Mens Basketball",
          "image": "https://seatgeek.com/images/performers-landscape/evansville-purple-aces-mens-basketball-c0bebc/6561/huge.jpg",
          "id": 6561,
          "images": {
            "huge": "https://seatgeek.com/images/performers-landscape/evansville-purple-aces-mens-basketball-c0bebc/6561/huge.jpg"
          },
          "divisions": [
            {
              "taxonomy_id": 1030200,
              "short_name": null,
              "display_name": "Division I",
              "display_type": "Division",
              "division_level": 1,
              "slug": null
            },
            {
              "taxonomy_id": 1030200,
              "short_name": "Missouri Valley",
              "display_name": "Missouri Valley",
              "display_type": "Conference",
              "division_level": 2,
              "slug": "missouri-valley"
            }
          ],
          "has_upcoming_events": true,
          "stats": {
            "event_count": 9
          },
          "taxonomies": [
            {
              "id": 1000000,
              "name": "sports",
              "parent_id": null,
              "document_source": {
                "source_type": "ELASTIC",
                "generation_type": "FULL"
              },
              "rank": 0,
              "seo_event_type": "sport"
            },
            {
              "id": 1030000,
              "name": "basketball",
              "parent_id": 1000000,
              "document_source": {
                "source_type": "ELASTIC",
                "generation_type": "FULL"
              },
              "rank": 0,
              "seo_event_type": "basketball"
            },
            {
              "id": 1030200,
              "name": "ncaa_basketball",
              "parent_id": 1030000,
              "document_source": {
                "source_type": "ELASTIC",
                "generation_type": "FULL"
              },
              "rank": 5,
              "seo_event_type": "ncaa-basketball"
            }
          ],
          "image_attribution": "SeatGeek - 2022 (2000 X 2000)",
          "url": "https://seatgeek.com/evansville-purple-aces-mens-basketball-tickets",
          "score": 0.41,
          "slug": "evansville-purple-aces-mens-basketball",
          "home_venue_id": 6370,
          "short_name": "Evansville",
          "num_upcoming_events": 9,
          "colors": null,
          "image_license": "SeatGeek - 2022 (2000 X 2000)",
          "popularity": 0,
          "away_team": true,
          "location": {
            "lat": 37.9721,
            "lon": -87.5678
          },
          "image_rights_message": ""
        }
      ],
      "is_open": false,
      "links": [ ],
      "datetime_local": "2024-02-03T03:30:00",
      "time_tbd": true,
      "short_title": "Evansville at Valparaiso",
      "visible_until_utc": "2024-02-04T06:00:00",
      "stats": {
        "listing_count": 1,
        "average_price": 54,
        "lowest_price_good_deals": null,
        "lowest_price": 51,
        "highest_price": 56,
        "visible_listing_count": 1,
        "dq_bucket_counts": [
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0
        ],
        "median_price": 54,
        "lowest_sg_base_price": 33,
        "lowest_sg_base_price_good_deals": null,
        "ticket_count": 8
      },
      "taxonomies": [
        {
          "id": 1000000,
          "name": "sports",
          "parent_id": null,
          "rank": 0,
          "seo_event_type": "sport"
        },
        {
          "id": 1030000,
          "name": "basketball",
          "parent_id": 1000000,
          "rank": 0,
          "seo_event_type": "basketball"
        },
        {
          "id": 1030200,
          "name": "ncaa_basketball",
          "parent_id": 1030000,
          "rank": 5,
          "seo_event_type": "ncaa-basketball"
        }
      ],
      "url": "https://seatgeek.com/valparaiso-beacons-mens-basketball-tickets/ncaa-basketball/2024-02-03-3-30-am/6195761",
      "score": 0.212,
      "announce_date": "2023-09-22T00:00:00",
      "created_at": "2023-09-22T19:25:48",
      "date_tbd": false,
      "title": "Evansville Purple Aces at Valparaiso Beacons Mens Basketball",
      "popularity": 0.682,
      "description": "",
      "status": "normal",
      "access_method": null,
      "event_promotion": null,
      "announcements": { },
      "conditional": false,
      "enddatetime_utc": null,
      "visible_at": null,
      "is_visible_override": "VISIBLE",
      "tdc_pvo_id": 0,
      "tdc_pv_id": 0,
      "is_visible": true,
      "performer_order": [ ],
      "integrated": null,
      "themes": [ ],
      "domain_information": [ ]
    },
    {
      "type": "ncaa_basketball",
      "id": 6195423,
      "datetime_utc": "2024-02-03T09:30:00",
      "venue": {
        "state": "MO",
        "name_v2": "Great Southern Bank Arena",
        "postal_code": "65897",
        "name": "Great Southern Bank Arena",
        "links": [ ],
        "timezone": "America/Chicago",
        "url": "https://seatgeek.com/venues/great-southern-bank-arena/tickets",
        "score": 0.62,
        "location": {
          "lat": 37.2021,
          "lon": -93.2831
        },
        "address": "685 South John Q. Hammonds Pkwy.",
        "country": "US",
        "has_upcoming_events": true,
        "num_upcoming_events": 14,
        "city": "Springfield",
        "slug": "great-southern-bank-arena",
        "extended_address": "Springfield, MO 65897",
        "id": 2067,
        "popularity": 0,
        "access_method": null,
        "metro_code": 619,
        "capacity": 0,
        "display_location": "Springfield, MO"
      },
      "datetime_tbd": false,
      "performers": [
        {
          "type": "ncaa_basketball",
          "name": "Missouri State Bears Mens Basketball",
          "image": "https://seatgeek.com/images/performers-landscape/missouri-state-bears-mens-basketball-a22dfa/6568/huge.jpg",
          "id": 6568,
          "images": {
            "huge": "https://seatgeek.com/images/performers-landscape/missouri-state-bears-mens-basketball-a22dfa/6568/huge.jpg"
          },
          "divisions": [
            {
              "taxonomy_id": 1030200,
              "short_name": null,
              "display_name": "Division I",
              "display_type": "Division",
              "division_level": 1,
              "slug": null
            },
            {
              "taxonomy_id": 1030200,
              "short_name": "Missouri Valley",
              "display_name": "Missouri Valley",
              "display_type": "Conference",
              "division_level": 2,
              "slug": "missouri-valley"
            }
          ],
          "has_upcoming_events": true,
          "primary": true,
          "stats": {
            "event_count": 9
          },
          "taxonomies": [
            {
              "id": 1000000,
              "name": "sports",
              "parent_id": null,
              "document_source": {
                "source_type": "ELASTIC",
                "generation_type": "FULL"
              },
              "rank": 0,
              "seo_event_type": "sport"
            },
            {
              "id": 1030000,
              "name": "basketball",
              "parent_id": 1000000,
              "document_source": {
                "source_type": "ELASTIC",
                "generation_type": "FULL"
              },
              "rank": 0,
              "seo_event_type": "basketball"
            },
            {
              "id": 1030200,
              "name": "ncaa_basketball",
              "parent_id": 1030000,
              "document_source": {
                "source_type": "ELASTIC",
                "generation_type": "FULL"
              },
              "rank": 5,
              "seo_event_type": "ncaa-basketball"
            }
          ],
          "image_attribution": "SeatGeek - 2022 (2000 X 2000)",
          "url": "https://seatgeek.com/missouri-state-bears-mens-basketball-tickets",
          "score": 0.35,
          "slug": "missouri-state-bears-mens-basketball",
          "home_venue_id": 2067,
          "short_name": "Missouri State",
          "num_upcoming_events": 9,
          "colors": null,
          "image_license": "SeatGeek - 2022 (2000 X 2000)",
          "popularity": 0,
          "home_team": true,
          "location": {
            "lat": 37.2021,
            "lon": -93.2831
          },
          "image_rights_message": ""
        },
        {
          "type": "ncaa_basketball",
          "name": "Belmont Bruins Mens Basketball",
          "image": "https://seatgeek.com/images/performers-landscape/belmont-bruins-mens-basketball-e99a33/6444/huge.jpg",
          "id": 6444,
          "images": {
            "huge": "https://seatgeek.com/images/performers-landscape/belmont-bruins-mens-basketball-e99a33/6444/huge.jpg"
          },
          "divisions": [
            {
              "taxonomy_id": 1030200,
              "short_name": null,
              "display_name": "Division I",
              "display_type": "Division",
              "division_level": 1,
              "slug": null
            },
            {
              "taxonomy_id": 1030200,
              "short_name": "Ohio Valley",
              "display_name": "Ohio Valley",
              "display_type": "Conference",
              "division_level": 2,
              "slug": "ohio-valley"
            }
          ],
          "has_upcoming_events": true,
          "stats": {
            "event_count": 9
          },
          "taxonomies": [
            {
              "id": 1000000,
              "name": "sports",
              "parent_id": null,
              "document_source": {
                "source_type": "ELASTIC",
                "generation_type": "FULL"
              },
              "rank": 0,
              "seo_event_type": "sport"
            },
            {
              "id": 1030000,
              "name": "basketball",
              "parent_id": 1000000,
              "document_source": {
                "source_type": "ELASTIC",
                "generation_type": "FULL"
              },
              "rank": 0,
              "seo_event_type": "basketball"
            },
            {
              "id": 1030200,
              "name": "ncaa_basketball",
              "parent_id": 1030000,
              "document_source": {
                "source_type": "ELASTIC",
                "generation_type": "FULL"
              },
              "rank": 5,
              "seo_event_type": "ncaa-basketball"
            }
          ],
          "image_attribution": "SeatGeek - 2022 (2000 X 2000)",
          "url": "https://seatgeek.com/belmont-bruins-mens-basketball-tickets",
          "score": 0.39,
          "slug": "belmont-bruins-mens-basketball",
          "home_venue_id": 5164,
          "short_name": "Belmont",
          "num_upcoming_events": 9,
          "colors": null,
          "image_license": "SeatGeek - 2022 (2000 X 2000)",
          "popularity": 0,
          "away_team": true,
          "location": {
            "lat": 36.1331,
            "lon": -86.7954
          },
          "image_rights_message": ""
        }
      ],
      "is_open": false,
      "links": [ ],
      "datetime_local": "2024-02-03T03:30:00",
      "time_tbd": true,
      "short_title": "Belmont at Missouri State",
      "visible_until_utc": "2024-02-04T06:00:00",
      "stats": {
        "listing_count": 5,
        "average_price": 35,
        "lowest_price_good_deals": 26,
        "lowest_price": 26,
        "highest_price": 52,
        "visible_listing_count": 5,
        "dq_bucket_counts": [
          0,
          0,
          3,
          1,
          0,
          0,
          0,
          2
        ],
        "median_price": 33,
        "lowest_sg_base_price": 14,
        "lowest_sg_base_price_good_deals": 14,
        "ticket_count": 16
      },
      "taxonomies": [
        {
          "id": 1000000,
          "name": "sports",
          "parent_id": null,
          "rank": 0,
          "seo_event_type": "sport"
        },
        {
          "id": 1030000,
          "name": "basketball",
          "parent_id": 1000000,
          "rank": 0,
          "seo_event_type": "basketball"
        },
        {
          "id": 1030200,
          "name": "ncaa_basketball",
          "parent_id": 1030000,
          "rank": 5,
          "seo_event_type": "ncaa-basketball"
        }
      ],
      "url": "https://seatgeek.com/missouri-state-bears-mens-basketball-tickets/ncaa-basketball/2024-02-03-3-30-am/6195423",
      "score": 0.264,
      "announce_date": "2023-09-22T00:00:00",
      "created_at": "2023-09-22T17:27:13",
      "date_tbd": false,
      "title": "Belmont Bruins at Missouri State Bears Mens Basketball",
      "popularity": 0.703,
      "description": "",
      "status": "normal",
      "access_method": null,
      "event_promotion": null,
      "announcements": { },
      "conditional": false,
      "enddatetime_utc": null,
      "visible_at": null,
      "is_visible_override": "VISIBLE",
      "tdc_pvo_id": 0,
      "tdc_pv_id": 0,
      "is_visible": true,
      "performer_order": [ ],
      "integrated": null,
      "themes": [ ],
      "domain_information": [ ]
    },
    {
      "type": "ncaa_basketball",
      "id": 6195727,
      "datetime_utc": "2024-02-03T09:30:00",
      "venue": {
        "state": "IL",
        "name_v2": "Credit Union 1 Arena at UIC",
        "postal_code": "60607",
        "name": "Credit Union 1 Arena at UIC",
        "links": [ ],
        "timezone": "America/Chicago",
        "url": "https://seatgeek.com/venues/credit-union-1-arena-at-uic-4/tickets",
        "score": 0.6,
        "location": {
          "lat": 41.8749,
          "lon": -87.6561
        },
        "address": "525 South Racine",
        "country": "US",
        "has_upcoming_events": true,
        "num_upcoming_events": 13,
        "city": "Chicago",
        "slug": "credit-union-1-arena-at-uic-4",
        "extended_address": "Chicago, IL 60607",
        "id": 1140,
        "popularity": 0,
        "access_method": null,
        "metro_code": 602,
        "capacity": 10000,
        "display_location": "Chicago, IL"
      },
      "datetime_tbd": false,
      "performers": [
        {
          "type": "ncaa_basketball",
          "name": "UIC Flames Mens Basketball",
          "image": "https://seatgeek.com/images/performers-landscape/uic-flames-mens-basketball-1-b44339/6621/huge.jpg",
          "id": 6621,
          "images": {
            "huge": "https://seatgeek.com/images/performers-landscape/uic-flames-mens-basketball-1-b44339/6621/huge.jpg"
          },
          "divisions": [
            {
              "taxonomy_id": 1030200,
              "short_name": null,
              "display_name": "Division I",
              "display_type": "Division",
              "division_level": 1,
              "slug": null
            },
            {
              "taxonomy_id": 1030200,
              "short_name": "Horizon",
              "display_name": "Horizon",
              "display_type": "Conference",
              "division_level": 2,
              "slug": "horizon"
            }
          ],
          "has_upcoming_events": true,
          "primary": true,
          "stats": {
            "event_count": 9
          },
          "taxonomies": [
            {
              "id": 1000000,
              "name": "sports",
              "parent_id": null,
              "document_source": {
                "source_type": "ELASTIC",
                "generation_type": "FULL"
              },
              "rank": 0,
              "seo_event_type": "sport"
            },
            {
              "id": 1030000,
              "name": "basketball",
              "parent_id": 1000000,
              "document_source": {
                "source_type": "ELASTIC",
                "generation_type": "FULL"
              },
              "rank": 0,
              "seo_event_type": "basketball"
            },
            {
              "id": 1030200,
              "name": "ncaa_basketball",
              "parent_id": 1030000,
              "document_source": {
                "source_type": "ELASTIC",
                "generation_type": "FULL"
              },
              "rank": 5,
              "seo_event_type": "ncaa-basketball"
            }
          ],
          "image_attribution": "SeatGeek - 2022",
          "url": "https://seatgeek.com/uic-flames-mens-basketball-1-tickets",
          "score": 0.33,
          "slug": "uic-flames-mens-basketball-1",
          "home_venue_id": 1140,
          "short_name": "UIC",
          "num_upcoming_events": 9,
          "colors": null,
          "image_license": "SeatGeek - 2022",
          "popularity": 0,
          "home_team": true,
          "location": {
            "lat": 41.8749,
            "lon": -87.6561
          },
          "image_rights_message": ""
        },
        {
          "type": "ncaa_basketball",
          "name": "Southern Illinois Salukis Mens Basketball",
          "image": "https://seatgeek.com/images/performers-landscape/southern-illinois-salukis-mens-basketball-f1f6b1/6381/huge.jpg",
          "id": 6381,
          "images": {
            "huge": "https://seatgeek.com/images/performers-landscape/southern-illinois-salukis-mens-basketball-f1f6b1/6381/huge.jpg"
          },
          "divisions": [
            {
              "taxonomy_id": 1030200,
              "short_name": null,
              "display_name": "Division I",
              "display_type": "Division",
              "division_level": 1,
              "slug": null
            },
            {
              "taxonomy_id": 1030200,
              "short_name": "Missouri Valley",
              "display_name": "Missouri Valley",
              "display_type": "Conference",
              "division_level": 2,
              "slug": "missouri-valley"
            }
          ],
          "has_upcoming_events": true,
          "stats": {
            "event_count": 9
          },
          "taxonomies": [
            {
              "id": 1000000,
              "name": "sports",
              "parent_id": null,
              "document_source": {
                "source_type": "ELASTIC",
                "generation_type": "FULL"
              },
              "rank": 0,
              "seo_event_type": "sport"
            },
            {
              "id": 1030000,
              "name": "basketball",
              "parent_id": 1000000,
              "document_source": {
                "source_type": "ELASTIC",
                "generation_type": "FULL"
              },
              "rank": 0,
              "seo_event_type": "basketball"
            },
            {
              "id": 1030200,
              "name": "ncaa_basketball",
              "parent_id": 1030000,
              "document_source": {
                "source_type": "ELASTIC",
                "generation_type": "FULL"
              },
              "rank": 5,
              "seo_event_type": "ncaa-basketball"
            }
          ],
          "image_attribution": "SeatGeek - 2022 (2000 X 2000)",
          "url": "https://seatgeek.com/southern-illinois-salukis-mens-basketball-tickets",
          "score": 0.35,
          "slug": "southern-illinois-salukis-mens-basketball",
          "home_venue_id": 4095,
          "short_name": "Southern Illinois",
          "num_upcoming_events": 9,
          "colors": null,
          "image_license": "SeatGeek - 2022 (2000 X 2000)",
          "popularity": 0,
          "away_team": true,
          "location": {
            "lat": 37.7251,
            "lon": -89.2167
          },
          "image_rights_message": ""
        }
      ],
      "is_open": false,
      "links": [ ],
      "datetime_local": "2024-02-03T03:30:00",
      "time_tbd": true,
      "short_title": "Southern Illinois at UIC",
      "visible_until_utc": "2024-02-04T06:00:00",
      "stats": {
        "listing_count": null,
        "average_price": null,
        "lowest_price_good_deals": null,
        "lowest_price": null,
        "highest_price": null,
        "visible_listing_count": null,
        "dq_bucket_counts": null,
        "median_price": null,
        "lowest_sg_base_price": null,
        "lowest_sg_base_price_good_deals": null,
        "ticket_count": null
      },
      "taxonomies": [
        {
          "id": 1000000,
          "name": "sports",
          "parent_id": null,
          "rank": 0,
          "seo_event_type": "sport"
        },
        {
          "id": 1030000,
          "name": "basketball",
          "parent_id": 1000000,
          "rank": 0,
          "seo_event_type": "basketball"
        },
        {
          "id": 1030200,
          "name": "ncaa_basketball",
          "parent_id": 1030000,
          "rank": 5,
          "seo_event_type": "ncaa-basketball"
        }
      ],
      "url": "https://seatgeek.com/uic-flames-mens-basketball-1-tickets/ncaa-basketball/2024-02-03-3-30-am/6195727",
      "score": 0.313,
      "announce_date": "2023-09-22T00:00:00",
      "created_at": "2023-09-22T19:15:31",
      "date_tbd": false,
      "title": "Southern Illinois Salukis at UIC Flames Mens Basketball",
      "popularity": 0.731,
      "description": "",
      "status": "normal",
      "access_method": null,
      "event_promotion": null,
      "announcements": { },
      "conditional": false,
      "enddatetime_utc": null,
      "visible_at": null,
      "is_visible_override": "VISIBLE",
      "tdc_pvo_id": 0,
      "tdc_pv_id": 0,
      "is_visible": true,
      "performer_order": [ ],
      "integrated": null,
      "themes": [ ],
      "domain_information": [ ]
    }
  ],
  "meta": {
    "total": 110913,
    "took": 10,
    "page": 1,
    "per_page": 10,
    "geolocation": null
  }
}





*/