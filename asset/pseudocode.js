/*
1. navbar with search and location
2. Pass the inputs to the events api
3. display results in small cards









API URL:
https://api.seatgeek.com/2/events?lat=43.0000&lon=-73.935242&range=100mi&&datetime_utc.gte=2024-02-02&datetime_utc.lte=2024-03-03&client_id=Mzk2OTE5NzR8MTcwNjczNjQ3MS45OTA5Mjc3

Results:
{
  "events": [
    {
      "type": "ncaa_basketball",
      "id": 6354909,
      "datetime_utc": "2024-02-02T08:30:00",
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
        "num_upcoming_events": 8,
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
          "name": "Cornell Big Red Mens Basketball",
          "image": "https://seatgeek.com/images/performers-landscape/cornell-big-red-mens-basketball-459111/6534/huge.jpg",
          "id": 6534,
          "images": {
            "huge": "https://seatgeek.com/images/performers-landscape/cornell-big-red-mens-basketball-459111/6534/huge.jpg"
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
          "url": "https://seatgeek.com/cornell-big-red-mens-basketball-tickets",
          "score": 0.47,
          "slug": "cornell-big-red-mens-basketball",
          "home_venue_id": 4163,
          "short_name": "Cornell",
          "num_upcoming_events": 9,
          "colors": null,
          "image_license": "SeatGeek - 2022 (2000 X 2000)",
          "popularity": 0,
          "away_team": true,
          "location": {
            "lat": 42.444,
            "lon": -76.5019
          },
          "image_rights_message": ""
        }
      ],
      "is_open": false,
      "links": [ ],
      "datetime_local": "2024-02-02T03:30:00",
      "time_tbd": true,
      "short_title": "Cornell at Dartmouth",
      "visible_until_utc": "2024-02-03T05:00:00",
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
      "url": "https://seatgeek.com/dartmouth-big-green-mens-basketball-tickets/ncaa-basketball/2024-02-02-3-30-am/6354909",
      "score": 0.216,
      "announce_date": "2024-01-21T00:00:00",
      "created_at": "2024-01-21T05:56:02",
      "date_tbd": false,
      "title": "Cornell Big Red at Dartmouth Big Green Mens Basketball",
      "popularity": 0.687,
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
      "type": "minor_league_hockey",
      "id": 6143340,
      "datetime_utc": "2024-02-03T00:00:00",
      "venue": {
        "state": "NY",
        "name_v2": "Adirondack Bank Center",
        "postal_code": "13502",
        "name": "Adirondack Bank Center",
        "links": [ ],
        "timezone": "America/New_York",
        "url": "https://seatgeek.com/venues/adirondack-bank-center/tickets",
        "score": 0.55,
        "location": {
          "lat": 43.1049,
          "lon": -75.2334
        },
        "address": "400 Oriskany St. West",
        "country": "US",
        "has_upcoming_events": true,
        "num_upcoming_events": 28,
        "city": "Utica",
        "slug": "adirondack-bank-center",
        "extended_address": "Utica, NY 13502",
        "id": 1680,
        "popularity": 0,
        "access_method": null,
        "metro_code": 526,
        "capacity": 5700,
        "display_location": "Utica, NY"
      },
      "datetime_tbd": false,
      "performers": [
        {
          "type": "minor_league_hockey",
          "name": "Utica Comets",
          "image": "https://seatgeek.com/images/performers-landscape/utica-comets-633f3a/256059/huge.jpg",
          "id": 256059,
          "images": {
            "huge": "https://seatgeek.com/images/performers-landscape/utica-comets-633f3a/256059/huge.jpg"
          },
          "divisions": null,
          "has_upcoming_events": true,
          "primary": true,
          "stats": {
            "event_count": 31
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
              "id": 1040300,
              "name": "minor_league_hockey",
              "parent_id": 1040000,
              "document_source": {
                "source_type": "ELASTIC",
                "generation_type": "FULL"
              },
              "rank": 0,
              "seo_event_type": "minor-league-hockey"
            }
          ],
          "image_attribution": "Client provided - 2023",
          "url": "https://seatgeek.com/utica-comets-tickets",
          "score": 0.45,
          "slug": "utica-comets",
          "home_venue_id": 1680,
          "short_name": "Utica Comets",
          "num_upcoming_events": 31,
          "colors": {
            "all": [
              "#000000",
              "#CF2031",
              "#000000"
            ],
            "iconic": "#CF2031",
            "primary": [
              "#000000",
              "#CF2031"
            ]
          },
          "image_license": "Client provided - 2023",
          "popularity": 0,
          "home_team": true,
          "location": {
            "lat": 43.1049,
            "lon": -75.2334
          },
          "image_rights_message": ""
        },
        {
          "type": "minor_league_hockey",
          "name": "Toronto Marlies",
          "image": "https://seatgeek.com/images/performers-landscape/toronto-marlies-c10f1e/9322/huge.jpg",
          "id": 9322,
          "images": {
            "huge": "https://seatgeek.com/images/performers-landscape/toronto-marlies-c10f1e/9322/huge.jpg"
          },
          "divisions": null,
          "has_upcoming_events": true,
          "stats": {
            "event_count": 34
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
              "id": 1040300,
              "name": "minor_league_hockey",
              "parent_id": 1040000,
              "document_source": {
                "source_type": "ELASTIC",
                "generation_type": "FULL"
              },
              "rank": 0,
              "seo_event_type": "minor-league-hockey"
            }
          ],
          "image_attribution": "SeatGeek - 2022",
          "url": "https://seatgeek.com/toronto-marlies-tickets",
          "score": 0.49,
          "slug": "toronto-marlies",
          "home_venue_id": 3110,
          "short_name": "Toronto Marlies",
          "num_upcoming_events": 34,
          "colors": null,
          "image_license": "SeatGeek - 2022",
          "popularity": 0,
          "away_team": true,
          "location": {
            "lat": 43.6356,
            "lon": -79.415
          },
          "image_rights_message": ""
        }
      ],
      "is_open": false,
      "links": [ ],
      "datetime_local": "2024-02-02T19:00:00",
      "time_tbd": false,
      "short_title": "Toronto Marlies at Utica Comets",
      "visible_until_utc": "2024-02-03T04:00:00",
      "stats": {
        "listing_count": 25,
        "average_price": 35,
        "lowest_price_good_deals": 15,
        "lowest_price": 15,
        "highest_price": 57,
        "visible_listing_count": 25,
        "dq_bucket_counts": [
          0,
          9,
          7,
          7,
          1,
          3,
          1,
          0
        ],
        "median_price": 35,
        "lowest_sg_base_price": 5,
        "lowest_sg_base_price_good_deals": 5,
        "ticket_count": 71
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
          "id": 1040300,
          "name": "minor_league_hockey",
          "parent_id": 1040000,
          "rank": 0,
          "seo_event_type": "minor-league-hockey"
        }
      ],
      "url": "https://seatgeek.com/utica-comets-tickets/minor-league-hockey/2024-02-02-7-pm/6143340",
      "score": 0.384,
      "announce_date": "2023-08-21T00:00:00",
      "created_at": "2023-08-21T19:19:53",
      "date_tbd": false,
      "title": "Toronto Marlies at Utica Comets",
      "popularity": 0.743,
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
      "integrated": {
        "provider_name": "PACIOLAN",
        "provider_id": "568:C24:GM23"
      },
      "themes": [ ],
      "domain_information": [ ]
    },
    {
      "type": "minor_league_hockey",
      "id": 6093812,
      "datetime_utc": "2024-02-03T00:00:00",
      "venue": {
        "state": "NY",
        "name_v2": "Cool Insuring Arena",
        "postal_code": "12801",
        "name": "Cool Insuring Arena",
        "links": [ ],
        "timezone": "America/New_York",
        "url": "https://seatgeek.com/venues/cool-insuring-arena-2/tickets",
        "score": 0.74,
        "location": {
          "lat": 43.3082,
          "lon": -73.6419
        },
        "address": "1 Civic Center Plaza",
        "country": "US",
        "has_upcoming_events": true,
        "num_upcoming_events": 17,
        "city": "Glens Falls",
        "slug": "cool-insuring-arena-2",
        "extended_address": "Glens Falls, NY 12801",
        "id": 1389,
        "popularity": 0,
        "access_method": null,
        "metro_code": 532,
        "capacity": 4806,
        "display_location": "Glens Falls, NY"
      },
      "datetime_tbd": false,
      "performers": [
        {
          "type": "minor_league_hockey",
          "name": "Adirondack Thunder",
          "image": "https://seatgeek.com/images/performers-landscape/adirondack-thunder-de620f/347912/33800/huge.jpg",
          "id": 347912,
          "images": {
            "huge": "https://seatgeek.com/images/performers-landscape/adirondack-thunder-de620f/347912/33800/huge.jpg"
          },
          "divisions": null,
          "has_upcoming_events": true,
          "primary": true,
          "stats": {
            "event_count": 30
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
              "id": 1040300,
              "name": "minor_league_hockey",
              "parent_id": 1040000,
              "document_source": {
                "source_type": "ELASTIC",
                "generation_type": "FULL"
              },
              "rank": 0,
              "seo_event_type": "minor-league-hockey"
            }
          ],
          "image_attribution": "Client Provided 2",
          "url": "https://seatgeek.com/adirondack-thunder-tickets",
          "score": 0.55,
          "slug": "adirondack-thunder",
          "home_venue_id": 1389,
          "short_name": "Adirondack Thunder",
          "num_upcoming_events": 30,
          "colors": {
            "all": [
              "#d2202f",
              "#d2202f"
            ],
            "iconic": "#d2202f",
            "primary": [
              "#d2202f"
            ]
          },
          "image_license": "Client Provided 2",
          "popularity": 0,
          "home_team": true,
          "location": {
            "lat": 43.3082,
            "lon": -73.6419
          },
          "image_rights_message": ""
        },
        {
          "type": "minor_league_hockey",
          "name": "Reading Royals",
          "image": "https://seatgeek.com/images/performers-landscape/reading-royals-7e17f2/9287/huge.jpg",
          "id": 9287,
          "images": {
            "huge": "https://seatgeek.com/images/performers-landscape/reading-royals-7e17f2/9287/huge.jpg"
          },
          "divisions": null,
          "has_upcoming_events": true,
          "stats": {
            "event_count": 33
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
              "id": 1040300,
              "name": "minor_league_hockey",
              "parent_id": 1040000,
              "document_source": {
                "source_type": "ELASTIC",
                "generation_type": "FULL"
              },
              "rank": 0,
              "seo_event_type": "minor-league-hockey"
            }
          ],
          "image_attribution": "SeatGeek - 2022 (2000 X 2000)",
          "url": "https://seatgeek.com/reading-royals-tickets",
          "score": 0.45,
          "slug": "reading-royals",
          "home_venue_id": 629,
          "short_name": "Reading Royals",
          "num_upcoming_events": 33,
          "colors": null,
          "image_license": "SeatGeek - 2022 (2000 X 2000)",
          "popularity": 0,
          "away_team": true,
          "location": {
            "lat": 40.3351,
            "lon": -75.9233
          },
          "image_rights_message": ""
        }
      ],
      "is_open": true,
      "links": [ ],
      "datetime_local": "2024-02-02T19:00:00",
      "time_tbd": false,
      "short_title": "Reading Royals at Adirondack Thunder",
      "visible_until_utc": "2024-02-03T01:00:00",
      "stats": {
        "listing_count": 85,
        "average_price": 26,
        "lowest_price_good_deals": 26,
        "lowest_price": 26,
        "highest_price": 34,
        "visible_listing_count": 85,
        "dq_bucket_counts": [
          6,
          8,
          26,
          47,
          0,
          0,
          1,
          0
        ],
        "median_price": 26,
        "lowest_sg_base_price": 20,
        "lowest_sg_base_price_good_deals": 22,
        "ticket_count": 258
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
          "id": 1040300,
          "name": "minor_league_hockey",
          "parent_id": 1040000,
          "rank": 0,
          "seo_event_type": "minor-league-hockey"
        }
      ],
      "url": "https://seatgeek.com/adirondack-thunder-tickets/minor-league-hockey/2024-02-02-7-pm/6093812",
      "score": 0.659,
      "announce_date": "2023-07-19T00:00:00",
      "created_at": "2023-07-19T21:22:00",
      "date_tbd": false,
      "title": "Reading Royals at Adirondack Thunder",
      "popularity": 0.916,
      "description": "",
      "status": "normal",
      "access_method": null,
      "event_promotion": null,
      "announcements": { },
      "conditional": false,
      "enddatetime_utc": "2024-02-03T01:00:00",
      "visible_at": "2023-09-01T14:00:00Z",
      "is_visible_override": "UNSET",
      "tdc_pvo_id": 0,
      "tdc_pv_id": 0,
      "is_visible": true,
      "performer_order": [ ],
      "integrated": {
        "provider_name": "OPEN",
        "provider_id": "e_xy2hq9AByEIP9qZY1ik3qNV4S3Aqn6Z"
      },
      "themes": [ ],
      "domain_information": [ ]
    },
    {
      "type": "ncaa_basketball",
      "id": 6349823,
      "datetime_utc": "2024-02-03T00:00:00",
      "venue": {
        "state": "NY",
        "name_v2": "McCann Arena",
        "postal_code": "12601",
        "name": "McCann Arena",
        "links": [ ],
        "timezone": "America/New_York",
        "url": "https://seatgeek.com/venues/mccann-arena/tickets",
        "score": 0.41,
        "location": {
          "lat": 41.7242,
          "lon": -73.9331
        },
        "address": "3399 North Road",
        "country": "US",
        "has_upcoming_events": true,
        "num_upcoming_events": 11,
        "city": "Poughkeepsie",
        "slug": "mccann-arena",
        "extended_address": "Poughkeepsie, NY 12601",
        "id": 4243,
        "popularity": 0,
        "access_method": null,
        "metro_code": 501,
        "capacity": 0,
        "display_location": "Poughkeepsie, NY"
      },
      "datetime_tbd": false,
      "performers": [
        {
          "type": "ncaa_basketball",
          "name": "Marist Red Foxes Mens Basketball",
          "image": "https://seatgeek.com/images/performers-landscape/marist-red-foxes-mens-basketball-6a57de/6487/huge.jpg",
          "id": 6487,
          "images": {
            "huge": "https://seatgeek.com/images/performers-landscape/marist-red-foxes-mens-basketball-6a57de/6487/huge.jpg"
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
              "short_name": "Metro Atlantic Athletic",
              "display_name": "Metro Atlantic Athletic",
              "display_type": "Conference",
              "division_level": 2,
              "slug": "metro-atlantic-athletic"
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
          "url": "https://seatgeek.com/marist-red-foxes-mens-basketball-tickets",
          "score": 0.36,
          "slug": "marist-red-foxes-mens-basketball",
          "home_venue_id": 4243,
          "short_name": "Marist",
          "num_upcoming_events": 9,
          "colors": null,
          "image_license": "SeatGeek - 2022 (2000 X 2000)",
          "popularity": 0,
          "home_team": true,
          "location": {
            "lat": 41.7242,
            "lon": -73.9331
          },
          "image_rights_message": ""
        },
        {
          "type": "ncaa_basketball",
          "name": "Mount St. Mary's Mountaineers Mens Basketball",
          "image": "https://seatgeek.com/images/performers-landscape/mount-st-mary-s-mountaineers-mens-basketball-59f9a9/6497/huge.jpg",
          "id": 6497,
          "images": {
            "huge": "https://seatgeek.com/images/performers-landscape/mount-st-mary-s-mountaineers-mens-basketball-59f9a9/6497/huge.jpg"
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
              "short_name": "Northeast",
              "display_name": "Northeast",
              "display_type": "Conference",
              "division_level": 2,
              "slug": "northeast"
            }
          ],
          "has_upcoming_events": true,
          "stats": {
            "event_count": 10
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
          "url": "https://seatgeek.com/mount-st-mary-s-mountaineers-mens-basketball-tickets",
          "score": 0.38,
          "slug": "mount-st-mary-s-mountaineers-mens-basketball",
          "home_venue_id": 5151,
          "short_name": "Mount St. Mary's",
          "num_upcoming_events": 10,
          "colors": null,
          "image_license": "SeatGeek - 2022 (2000 X 2000)",
          "popularity": 0,
          "away_team": true,
          "location": {
            "lat": 39.6808,
            "lon": -77.35
          },
          "image_rights_message": ""
        }
      ],
      "is_open": false,
      "links": [ ],
      "datetime_local": "2024-02-02T19:00:00",
      "time_tbd": false,
      "short_title": "Mount St. Mary's at Marist",
      "visible_until_utc": "2024-02-03T04:00:00",
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
      "url": "https://seatgeek.com/marist-red-foxes-mens-basketball-tickets/ncaa-basketball/2024-02-02-7-pm/6349823",
      "score": 0.334,
      "announce_date": "2024-01-17T00:00:00",
      "created_at": "2024-01-17T15:21:33",
      "date_tbd": false,
      "title": "Mount St. Mary's Mountaineers at Marist Red Foxes Mens Basketball",
      "popularity": 0.742,
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
      "type": "concert",
      "id": 6232075,
      "datetime_utc": "2024-02-03T01:00:00",
      "venue": {
        "state": "NY",
        "name_v2": "Lark Hall",
        "postal_code": "12210",
        "name": "Lark Hall",
        "links": [ ],
        "timezone": "America/New_York",
        "url": "https://seatgeek.com/venues/lark-hall/tickets",
        "score": 0.23,
        "location": {
          "lat": 42.6538,
          "lon": -73.7659
        },
        "address": null,
        "country": "US",
        "has_upcoming_events": true,
        "num_upcoming_events": 3,
        "city": "Albany",
        "slug": "lark-hall",
        "extended_address": "Albany, NY 12210",
        "id": 520835,
        "popularity": 0,
        "access_method": null,
        "metro_code": 532,
        "capacity": 0,
        "display_location": "Albany, NY"
      },
      "datetime_tbd": false,
      "performers": [
        {
          "type": "band",
          "name": "Mo Lowda & The Humble",
          "image": "https://seatgeek.com/images/performers-landscape/mo-lowda-the-humble-ffe405/60950/huge.jpg",
          "id": 60950,
          "images": {
            "huge": "https://seatgeek.com/images/performers-landscape/mo-lowda-the-humble-ffe405/60950/huge.jpg"
          },
          "divisions": null,
          "has_upcoming_events": true,
          "primary": true,
          "stats": {
            "event_count": 17
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
          "url": "https://seatgeek.com/mo-lowda-the-humble-tickets",
          "score": 0.36,
          "slug": "mo-lowda-the-humble",
          "home_venue_id": null,
          "short_name": "Mo Lowda & The Humble",
          "num_upcoming_events": 17,
          "colors": null,
          "image_license": "SeatGeek - 2022 (2000 X 2000)",
          "genres": [
            {
              "id": 456,
              "name": "Rock",
              "slug": "rock",
              "primary": true,
              "images": {
                "1200x525": "https://seatgeek.com/images/performers-landscape/taylor-swift-95bfc1/35/1200x525.jpg",
                "1200x627": "https://seatgeek.com/images/performers-landscape/taylor-swift-5aed70/35/1200x627.jpg",
                "136x136": "https://seatgeek.com/images/performers-landscape/taylor-swift-ea1e7e/35/136x136.jpg",
                "500_700": "https://seatgeek.com/images/performers-landscape/taylor-swift-23f9f5/35/500_700.jpg",
                "800x320": "https://seatgeek.com/images/performers-landscape/taylor-swift-1ad124/35/800x320.jpg",
                "banner": "https://seatgeek.com/images/performers-landscape/taylor-swift-397e97/35/banner.jpg",
                "block": "https://seatgeek.com/images/performers-landscape/taylor-swift-9e502b/35/block.jpg",
                "criteo_130_160": "https://seatgeek.com/images/performers-landscape/taylor-swift-310144/35/criteo_130_160.jpg",
                "criteo_170_235": "https://seatgeek.com/images/performers-landscape/taylor-swift-19e3f0/35/criteo_170_235.jpg",
                "criteo_205_100": "https://seatgeek.com/images/performers-landscape/taylor-swift-92ebf3/35/criteo_205_100.jpg",
                "criteo_400_300": "https://seatgeek.com/images/performers-landscape/taylor-swift-bab6e1/35/criteo_400_300.jpg",
                "fb_100x72": "https://seatgeek.com/images/performers-landscape/taylor-swift-c1dbf4/35/fb_100x72.jpg",
                "fb_600_315": "https://seatgeek.com/images/performers-landscape/taylor-swift-15afb9/35/fb_600_315.jpg",
                "huge": "https://seatgeek.com/images/performers-landscape/taylor-swift-c1e4b6/35/huge.jpg",
                "ipad_event_modal": "https://seatgeek.com/images/performers-landscape/taylor-swift-3ebde5/35/ipad_event_modal.jpg",
                "ipad_header": "https://seatgeek.com/images/performers-landscape/taylor-swift-a807ae/35/ipad_header.jpg",
                "ipad_mini_explore": "https://seatgeek.com/images/performers-landscape/taylor-swift-69d4a9/35/ipad_mini_explore.jpg",
                "mongo": "https://seatgeek.com/images/performers-landscape/taylor-swift-5a3f01/35/mongo.jpg",
                "square_mid": "https://seatgeek.com/images/performers-landscape/taylor-swift-db2f1f/35/square_mid.jpg",
                "triggit_fb_ad": "https://seatgeek.com/images/performers-landscape/taylor-swift-c3abf8/35/triggit_fb_ad.jpg"
              },
              "image": "https://seatgeek.com/images/performers-landscape/taylor-swift-c1e4b6/35/huge.jpg",
              "document_source": {
                "source_type": "ELASTIC",
                "generation_type": "FULL"
              }
            },
            {
              "id": 457,
              "name": "Alternative",
              "slug": "alternative",
              "primary": false,
              "images": {
                "1200x525": "https://seatgeek.com/images/performers-landscape/chappell-roan-0641ac/665649/1200x525.jpg",
                "1200x627": "https://seatgeek.com/images/performers-landscape/chappell-roan-96a022/665649/1200x627.jpg",
                "136x136": "https://seatgeek.com/images/performers-landscape/chappell-roan-4c9c69/665649/136x136.jpg",
                "500_700": "https://seatgeek.com/images/performers-landscape/chappell-roan-71bc45/665649/500_700.jpg",
                "800x320": "https://seatgeek.com/images/performers-landscape/chappell-roan-9784be/665649/800x320.jpg",
                "banner": "https://seatgeek.com/images/performers-landscape/chappell-roan-9f58d9/665649/banner.jpg",
                "block": "https://seatgeek.com/images/performers-landscape/chappell-roan-5b8ee1/665649/block.jpg",
                "criteo_130_160": "https://seatgeek.com/images/performers-landscape/chappell-roan-3605dc/665649/criteo_130_160.jpg",
                "criteo_170_235": "https://seatgeek.com/images/performers-landscape/chappell-roan-5fe873/665649/criteo_170_235.jpg",
                "criteo_205_100": "https://seatgeek.com/images/performers-landscape/chappell-roan-4800ee/665649/criteo_205_100.jpg",
                "criteo_400_300": "https://seatgeek.com/images/performers-landscape/chappell-roan-b1ad27/665649/criteo_400_300.jpg",
                "fb_100x72": "https://seatgeek.com/images/performers-landscape/chappell-roan-af462d/665649/fb_100x72.jpg",
                "fb_600_315": "https://seatgeek.com/images/performers-landscape/chappell-roan-8e0bdd/665649/fb_600_315.jpg",
                "huge": "https://seatgeek.com/images/performers-landscape/chappell-roan-985688/665649/huge.jpg",
                "ipad_event_modal": "https://seatgeek.com/images/performers-landscape/chappell-roan-48e297/665649/ipad_event_modal.jpg",
                "ipad_header": "https://seatgeek.com/images/performers-landscape/chappell-roan-9e06d3/665649/ipad_header.jpg",
                "ipad_mini_explore": "https://seatgeek.com/images/performers-landscape/chappell-roan-c3b36c/665649/ipad_mini_explore.jpg",
                "mongo": "https://seatgeek.com/images/performers-landscape/chappell-roan-233d09/665649/mongo.jpg",
                "square_mid": "https://seatgeek.com/images/performers-landscape/chappell-roan-37fa52/665649/square_mid.jpg",
                "triggit_fb_ad": "https://seatgeek.com/images/performers-landscape/chappell-roan-a858ec/665649/triggit_fb_ad.jpg"
              },
              "image": "https://seatgeek.com/images/performers-landscape/chappell-roan-985688/665649/huge.jpg",
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
      "datetime_local": "2024-02-02T20:00:00",
      "time_tbd": false,
      "short_title": "Mo Lowda & The Humble",
      "visible_until_utc": "2024-02-03T05:00:00",
      "stats": {
        "listing_count": 1,
        "average_price": 39,
        "lowest_price_good_deals": null,
        "lowest_price": 37,
        "highest_price": 41,
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
        "median_price": 39,
        "lowest_sg_base_price": 22,
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
      "url": "https://seatgeek.com/mo-lowda-the-humble-tickets/albany-new-york-lark-hall-2024-02-02-8-pm/concert/6232075",
      "score": 0.199,
      "announce_date": "2023-10-12T00:00:00",
      "created_at": "2023-10-12T11:55:18",
      "date_tbd": false,
      "title": "Mo Lowda & The Humble",
      "popularity": 0.635,
      "description": "",
      "status": "normal",
      "access_method": null,
      "event_promotion": null,
      "announcements": { },
      "conditional": false,
      "enddatetime_utc": null,
      "visible_at": "2023-10-24T12:15:13Z",
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
      "type": "comedy",
      "id": 6344097,
      "datetime_utc": "2024-02-03T01:00:00",
      "venue": {
        "state": "MA",
        "name_v2": "The Armory at MGM Springfield",
        "postal_code": "01103",
        "name": "The Armory at MGM Springfield",
        "links": [ ],
        "timezone": "America/New_York",
        "url": "https://seatgeek.com/venues/the-armory-at-mgm-springfield/tickets",
        "score": 0.39,
        "location": {
          "lat": 42.0993,
          "lon": -72.5877
        },
        "address": "1 MGM Way",
        "country": "US",
        "has_upcoming_events": true,
        "num_upcoming_events": 26,
        "city": "Springfield",
        "slug": "the-armory-at-mgm-springfield",
        "extended_address": "Springfield, MA 01103",
        "id": 458667,
        "popularity": 0,
        "access_method": null,
        "metro_code": 543,
        "capacity": 0,
        "display_location": "Springfield, MA"
      },
      "datetime_tbd": false,
      "performers": [
        {
          "type": "theater_comedy",
          "name": "Roar Comedy",
          "image": "https://seatgeek.com/images/performers-landscape/roar-comedy-c54a4d/785331/huge.jpg",
          "id": 785331,
          "images": {
            "huge": "https://seatgeek.com/images/performers-landscape/roar-comedy-c54a4d/785331/huge.jpg"
          },
          "divisions": null,
          "has_upcoming_events": true,
          "primary": true,
          "stats": {
            "event_count": 26
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
          "url": "https://seatgeek.com/roar-comedy-tickets",
          "score": 0.27,
          "slug": "roar-comedy",
          "home_venue_id": null,
          "short_name": "Roar Comedy",
          "num_upcoming_events": 26,
          "colors": null,
          "image_license": "SeatGeek - 2022 (2000 X 2000)",
          "popularity": 0,
          "location": null,
          "image_rights_message": ""
        }
      ],
      "is_open": false,
      "links": [ ],
      "datetime_local": "2024-02-02T20:00:00",
      "time_tbd": false,
      "short_title": "Roar Comedy",
      "visible_until_utc": "2024-02-03T05:00:00",
      "stats": {
        "listing_count": 1,
        "average_price": 59,
        "lowest_price_good_deals": null,
        "lowest_price": 59,
        "highest_price": 59,
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
        "median_price": 59,
        "lowest_sg_base_price": 39,
        "lowest_sg_base_price_good_deals": null,
        "ticket_count": 6
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
      "url": "https://seatgeek.com/roar-comedy-tickets/comedy/2024-02-02-8-pm/6344097",
      "score": 0.225,
      "announce_date": "2024-01-10T00:00:00",
      "created_at": "2024-01-10T06:55:24",
      "date_tbd": false,
      "title": "Roar Comedy",
      "popularity": 0.634,
      "description": "",
      "status": "normal",
      "access_method": null,
      "event_promotion": null,
      "announcements": { },
      "conditional": false,
      "enddatetime_utc": null,
      "visible_at": "2024-01-10T07:27:09Z",
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
        "score": 0.38,
        "location": {
          "lat": 43.7022,
          "lon": -72.2896
        },
        "address": "6016 McNutt Hall",
        "country": "US",
        "has_upcoming_events": true,
        "num_upcoming_events": 9,
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
            "event_count": 10
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
          "num_upcoming_events": 10,
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
            "event_count": 10
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
          "num_upcoming_events": 10,
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
      "score": 0.24,
      "announce_date": "2024-01-21T00:00:00",
      "created_at": "2024-01-21T05:56:01",
      "date_tbd": false,
      "title": "Columbia Lions at Dartmouth Big Green Mens Basketball",
      "popularity": 0.673,
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
      "type": "ncaa_basketball",
      "id": 6169344,
      "datetime_utc": "2024-02-03T17:00:00",
      "venue": {
        "state": "MA",
        "name_v2": "Mullins Center",
        "postal_code": "01003",
        "name": "Mullins Center",
        "links": [ ],
        "timezone": "America/New_York",
        "url": "https://seatgeek.com/venues/mullins-center/tickets",
        "score": 0.6,
        "location": {
          "lat": 42.3732,
          "lon": -72.5199
        },
        "address": "200 Commonwealth Avenue",
        "country": "US",
        "has_upcoming_events": true,
        "num_upcoming_events": 18,
        "city": "Amherst",
        "slug": "mullins-center",
        "extended_address": "Amherst, MA 01003",
        "id": 1352,
        "popularity": 0,
        "access_method": null,
        "metro_code": 543,
        "capacity": 9493,
        "display_location": "Amherst, MA"
      },
      "datetime_tbd": false,
      "performers": [
        {
          "type": "ncaa_basketball",
          "name": "UMass Minutemen Mens Basketball",
          "image": "https://seatgeek.com/images/performers-landscape/umass-minutemen-mens-basketball-de16a1/4034/huge.jpg",
          "id": 4034,
          "images": {
            "huge": "https://seatgeek.com/images/performers-landscape/umass-minutemen-mens-basketball-de16a1/4034/huge.jpg"
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
              "short_name": "A-10",
              "display_name": "Atlantic 10",
              "display_type": "Conference",
              "division_level": 2,
              "slug": "atlantic-10"
            }
          ],
          "has_upcoming_events": true,
          "primary": true,
          "stats": {
            "event_count": 10
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
          "image_attribution": "Client Provided - 2023",
          "url": "https://seatgeek.com/umass-minutemen-mens-basketball-tickets",
          "score": 0.47,
          "slug": "umass-minutemen-mens-basketball",
          "home_venue_id": 1352,
          "short_name": "Massachusetts",
          "num_upcoming_events": 10,
          "colors": {
            "all": [
              "#000000",
              "#881C1C",
              "#881C1C"
            ],
            "iconic": "#881C1C",
            "primary": [
              "#000000",
              "#881C1C"
            ]
          },
          "image_license": "Client Provided - 2023",
          "popularity": 0,
          "home_team": true,
          "location": {
            "lat": 42.3732,
            "lon": -72.5199
          },
          "image_rights_message": ""
        },
        {
          "type": "ncaa_basketball",
          "name": "George Mason Patriots Mens Basketball",
          "image": "https://seatgeek.com/images/performers-landscape/george-mason-patriots-mens-basketball-d0da06/6498/huge.jpg",
          "id": 6498,
          "images": {
            "huge": "https://seatgeek.com/images/performers-landscape/george-mason-patriots-mens-basketball-d0da06/6498/huge.jpg"
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
              "short_name": "A-10",
              "display_name": "Atlantic 10",
              "display_type": "Conference",
              "division_level": 2,
              "slug": "atlantic-10"
            }
          ],
          "has_upcoming_events": true,
          "stats": {
            "event_count": 10
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
          "url": "https://seatgeek.com/george-mason-patriots-mens-basketball-tickets",
          "score": 0.41,
          "slug": "george-mason-patriots-mens-basketball",
          "home_venue_id": 804,
          "short_name": "George Mason",
          "num_upcoming_events": 10,
          "colors": null,
          "image_license": "SeatGeek - 2022",
          "popularity": 0,
          "away_team": true,
          "location": {
            "lat": 38.8462,
            "lon": -77.3064
          },
          "image_rights_message": ""
        }
      ],
      "is_open": false,
      "links": [ ],
      "datetime_local": "2024-02-03T12:00:00",
      "time_tbd": false,
      "short_title": "George Mason at Massachusetts",
      "visible_until_utc": "2024-02-03T21:00:00",
      "stats": {
        "listing_count": 13,
        "average_price": 37,
        "lowest_price_good_deals": 23,
        "lowest_price": 23,
        "highest_price": 66,
        "visible_listing_count": 10,
        "dq_bucket_counts": [
          2,
          4,
          7,
          6,
          2,
          2,
          1,
          0
        ],
        "median_price": 33,
        "lowest_sg_base_price": 12,
        "lowest_sg_base_price_good_deals": 12,
        "ticket_count": 35
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
      "url": "https://seatgeek.com/umass-minutemen-mens-basketball-tickets/ncaa-basketball/2024-02-03-12-pm/6169344",
      "score": 0.386,
      "announce_date": "2023-09-07T00:00:00",
      "created_at": "2023-09-07T16:27:11",
      "date_tbd": false,
      "title": "George Mason Patriots at UMass Minutemen Mens Basketball",
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
      "integrated": {
        "provider_name": "PACIOLAN",
        "provider_id": "407:MB23:M12"
      },
      "themes": [ ],
      "domain_information": [ ]
    },
    {
      "type": "ncaa_basketball",
      "id": 6328707,
      "datetime_utc": "2024-02-03T17:00:00",
      "venue": {
        "state": "NY",
        "name_v2": "Cotterell Court",
        "postal_code": "13346",
        "name": "Cotterell Court",
        "links": [ ],
        "timezone": "America/New_York",
        "url": "https://seatgeek.com/venues/cotterell-court/tickets",
        "score": 0.37,
        "location": {
          "lat": 42.8198,
          "lon": -75.5357
        },
        "address": "13 Oak Drive",
        "country": "US",
        "has_upcoming_events": true,
        "num_upcoming_events": 6,
        "city": "Hamilton",
        "slug": "cotterell-court",
        "extended_address": "Hamilton, NY 13346",
        "id": 5155,
        "popularity": 0,
        "access_method": null,
        "metro_code": 501,
        "capacity": 0,
        "display_location": "Hamilton, NY"
      },
      "datetime_tbd": false,
      "performers": [
        {
          "type": "ncaa_basketball",
          "name": "Colgate Raiders Mens Basketball",
          "image": "https://seatgeek.com/images/performers-landscape/colgate-raiders-mens-basketball-92fbac/6519/huge.jpg",
          "id": 6519,
          "images": {
            "huge": "https://seatgeek.com/images/performers-landscape/colgate-raiders-mens-basketball-92fbac/6519/huge.jpg"
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
              "short_name": "Patriot League",
              "display_name": "Patriot League",
              "display_type": "Conference",
              "division_level": 2,
              "slug": "patriot-league"
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
          "url": "https://seatgeek.com/colgate-raiders-mens-basketball-tickets",
          "score": 0.57,
          "slug": "colgate-raiders-mens-basketball",
          "home_venue_id": 5155,
          "short_name": "Colgate",
          "num_upcoming_events": 8,
          "colors": null,
          "image_license": "SeatGeek - 2022 (2000 X 2000)",
          "popularity": 0,
          "home_team": true,
          "location": {
            "lat": 42.8198,
            "lon": -75.5357
          },
          "image_rights_message": ""
        },
        {
          "type": "ncaa_basketball",
          "name": "Navy Midshipmen Mens Basketball",
          "image": "https://seatgeek.com/images/performers-landscape/navy-midshipmen-mens-basketball-cdc9a7/6453/huge.jpg",
          "id": 6453,
          "images": {
            "huge": "https://seatgeek.com/images/performers-landscape/navy-midshipmen-mens-basketball-cdc9a7/6453/huge.jpg"
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
              "short_name": "Patriot League",
              "display_name": "Patriot League",
              "display_type": "Conference",
              "division_level": 2,
              "slug": "patriot-league"
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
          "image_attribution": "Client Provided - 2023",
          "url": "https://seatgeek.com/navy-midshipmen-mens-basketball-tickets",
          "score": 0.35,
          "slug": "navy-midshipmen-mens-basketball",
          "home_venue_id": 4146,
          "short_name": "Navy",
          "num_upcoming_events": 9,
          "colors": {
            "all": [
              "#00205B",
              "#B5A67C",
              "#00205B"
            ],
            "iconic": "#00205B",
            "primary": [
              "#00205B",
              "#B5A67C"
            ]
          },
          "image_license": "Client Provided - 2023",
          "popularity": 0,
          "away_team": true,
          "location": {
            "lat": 38.9836,
            "lon": -76.4878
          },
          "image_rights_message": ""
        }
      ],
      "is_open": false,
      "links": [ ],
      "datetime_local": "2024-02-03T12:00:00",
      "time_tbd": false,
      "short_title": "Navy at Colgate",
      "visible_until_utc": "2024-02-03T21:00:00",
      "stats": {
        "listing_count": 6,
        "average_price": 36,
        "lowest_price_good_deals": null,
        "lowest_price": 25,
        "highest_price": 59,
        "visible_listing_count": 6,
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
        "median_price": 29,
        "lowest_sg_base_price": 14,
        "lowest_sg_base_price_good_deals": null,
        "ticket_count": 39
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
      "url": "https://seatgeek.com/colgate-raiders-mens-basketball-tickets/ncaa-basketball/2024-02-03-12-pm/6328707",
      "score": 0.34,
      "announce_date": "2023-12-26T00:00:00",
      "created_at": "2023-12-26T08:55:16",
      "date_tbd": false,
      "title": "Navy Midshipmen at Colgate Raiders Mens Basketball",
      "popularity": 0.742,
      "description": "",
      "status": "normal",
      "access_method": null,
      "event_promotion": null,
      "announcements": { },
      "conditional": false,
      "enddatetime_utc": null,
      "visible_at": "2024-02-01T08:01:27Z",
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
      "id": 6362997,
      "datetime_utc": "2024-02-03T20:00:00",
      "venue": {
        "state": "NY",
        "name_v2": "Caffe Lena",
        "postal_code": "12866",
        "name": "Caffe Lena",
        "links": [ ],
        "timezone": "America/New_York",
        "url": "https://seatgeek.com/venues/caffe-lena-1/tickets",
        "score": 0.28,
        "location": {
          "lat": 43.0805,
          "lon": -73.7834
        },
        "address": "47 Phila Street",
        "country": "US",
        "has_upcoming_events": true,
        "num_upcoming_events": 4,
        "city": "Saratoga Springs",
        "slug": "caffe-lena-1",
        "extended_address": "Saratoga Springs, NY 12866",
        "id": 281820,
        "popularity": 0,
        "access_method": null,
        "metro_code": 532,
        "capacity": 0,
        "display_location": "Saratoga Springs, NY"
      },
      "datetime_tbd": false,
      "performers": [
        {
          "type": "band",
          "name": "Dan Bern",
          "image": "https://seatgeek.com/images/performers-landscape/dan-bern-1520c8/8974/huge.jpg",
          "id": 8974,
          "images": {
            "huge": "https://seatgeek.com/images/performers-landscape/dan-bern-1520c8/8974/huge.jpg"
          },
          "divisions": null,
          "has_upcoming_events": true,
          "primary": true,
          "stats": {
            "event_count": 7
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
          "image_attribution": "Bobby Bank / WireImage / Getty Images",
          "url": "https://seatgeek.com/dan-bern-tickets",
          "score": 0.24,
          "slug": "dan-bern",
          "home_venue_id": null,
          "short_name": "Dan Bern",
          "num_upcoming_events": 7,
          "colors": null,
          "image_license": "rightsmanaged",
          "genres": [
            {
              "id": 450,
              "name": "Country",
              "slug": "country",
              "primary": false,
              "images": {
                "1200x525": "https://seatgeek.com/images/performers-landscape/zach-bryan-120c54/794528/1200x525.jpg",
                "1200x627": "https://seatgeek.com/images/performers-landscape/zach-bryan-c8264e/794528/1200x627.jpg",
                "136x136": "https://seatgeek.com/images/performers-landscape/zach-bryan-f3b693/794528/136x136.jpg",
                "500_700": "https://seatgeek.com/images/performers-landscape/zach-bryan-1eb10b/794528/500_700.jpg",
                "800x320": "https://seatgeek.com/images/performers-landscape/zach-bryan-bcd32a/794528/800x320.jpg",
                "banner": "https://seatgeek.com/images/performers-landscape/zach-bryan-13de79/794528/banner.jpg",
                "block": "https://seatgeek.com/images/performers-landscape/zach-bryan-634d53/794528/block.jpg",
                "criteo_130_160": "https://seatgeek.com/images/performers-landscape/zach-bryan-a5111d/794528/criteo_130_160.jpg",
                "criteo_170_235": "https://seatgeek.com/images/performers-landscape/zach-bryan-b6c343/794528/criteo_170_235.jpg",
                "criteo_205_100": "https://seatgeek.com/images/performers-landscape/zach-bryan-892b9d/794528/criteo_205_100.jpg",
                "criteo_400_300": "https://seatgeek.com/images/performers-landscape/zach-bryan-f93925/794528/criteo_400_300.jpg",
                "fb_100x72": "https://seatgeek.com/images/performers-landscape/zach-bryan-a4cf69/794528/fb_100x72.jpg",
                "fb_600_315": "https://seatgeek.com/images/performers-landscape/zach-bryan-461913/794528/fb_600_315.jpg",
                "huge": "https://seatgeek.com/images/performers-landscape/zach-bryan-b81ddf/794528/huge.jpg",
                "ipad_event_modal": "https://seatgeek.com/images/performers-landscape/zach-bryan-0349bb/794528/ipad_event_modal.jpg",
                "ipad_header": "https://seatgeek.com/images/performers-landscape/zach-bryan-7bb5ea/794528/ipad_header.jpg",
                "ipad_mini_explore": "https://seatgeek.com/images/performers-landscape/zach-bryan-05afbf/794528/ipad_mini_explore.jpg",
                "mongo": "https://seatgeek.com/images/performers-landscape/zach-bryan-5b69c1/794528/mongo.jpg",
                "square_mid": "https://seatgeek.com/images/performers-landscape/zach-bryan-6d553f/794528/square_mid.jpg",
                "triggit_fb_ad": "https://seatgeek.com/images/performers-landscape/zach-bryan-e3006f/794528/triggit_fb_ad.jpg"
              },
              "image": "https://seatgeek.com/images/performers-landscape/zach-bryan-b81ddf/794528/huge.jpg",
              "document_source": {
                "source_type": "ELASTIC",
                "generation_type": "FULL"
              }
            },
            {
              "id": 452,
              "name": "Pop",
              "slug": "pop",
              "primary": false,
              "images": {
                "1200x525": "https://seatgeek.com/images/performers-landscape/drake-b808d2/2351/1200x525.jpg",
                "1200x627": "https://seatgeek.com/images/performers-landscape/drake-f6d519/2351/1200x627.jpg",
                "136x136": "https://seatgeek.com/images/performers-landscape/drake-159c25/2351/136x136.jpg",
                "500_700": "https://seatgeek.com/images/performers-landscape/drake-6e659f/2351/500_700.jpg",
                "800x320": "https://seatgeek.com/images/performers-landscape/drake-0810f9/2351/800x320.jpg",
                "banner": "https://seatgeek.com/images/performers-landscape/drake-5270ef/2351/banner.jpg",
                "block": "https://seatgeek.com/images/performers-landscape/drake-ad0220/2351/block.jpg",
                "criteo_130_160": "https://seatgeek.com/images/performers-landscape/drake-e36892/2351/criteo_130_160.jpg",
                "criteo_170_235": "https://seatgeek.com/images/performers-landscape/drake-7f6d9b/2351/criteo_170_235.jpg",
                "criteo_205_100": "https://seatgeek.com/images/performers-landscape/drake-049f1b/2351/criteo_205_100.jpg",
                "criteo_400_300": "https://seatgeek.com/images/performers-landscape/drake-7c7fa3/2351/criteo_400_300.jpg",
                "fb_100x72": "https://seatgeek.com/images/performers-landscape/drake-ea37be/2351/fb_100x72.jpg",
                "fb_600_315": "https://seatgeek.com/images/performers-landscape/drake-1fac50/2351/fb_600_315.jpg",
                "huge": "https://seatgeek.com/images/performers-landscape/drake-596c64/2351/huge.jpg",
                "ipad_event_modal": "https://seatgeek.com/images/performers-landscape/drake-2b8ef2/2351/ipad_event_modal.jpg",
                "ipad_header": "https://seatgeek.com/images/performers-landscape/drake-43d9e5/2351/ipad_header.jpg",
                "ipad_mini_explore": "https://seatgeek.com/images/performers-landscape/drake-4fa826/2351/ipad_mini_explore.jpg",
                "mongo": "https://seatgeek.com/images/performers-landscape/drake-c7bf4b/2351/mongo.jpg",
                "square_mid": "https://seatgeek.com/images/performers-landscape/drake-ed28b0/2351/square_mid.jpg",
                "triggit_fb_ad": "https://seatgeek.com/images/performers-landscape/drake-490583/2351/triggit_fb_ad.jpg"
              },
              "image": "https://seatgeek.com/images/performers-landscape/drake-596c64/2351/huge.jpg",
              "document_source": {
                "source_type": "ELASTIC",
                "generation_type": "FULL"
              }
            },
            {
              "id": 456,
              "name": "Rock",
              "slug": "rock",
              "primary": false,
              "images": {
                "1200x525": "https://seatgeek.com/images/performers-landscape/taylor-swift-95bfc1/35/1200x525.jpg",
                "1200x627": "https://seatgeek.com/images/performers-landscape/taylor-swift-5aed70/35/1200x627.jpg",
                "136x136": "https://seatgeek.com/images/performers-landscape/taylor-swift-ea1e7e/35/136x136.jpg",
                "500_700": "https://seatgeek.com/images/performers-landscape/taylor-swift-23f9f5/35/500_700.jpg",
                "800x320": "https://seatgeek.com/images/performers-landscape/taylor-swift-1ad124/35/800x320.jpg",
                "banner": "https://seatgeek.com/images/performers-landscape/taylor-swift-397e97/35/banner.jpg",
                "block": "https://seatgeek.com/images/performers-landscape/taylor-swift-9e502b/35/block.jpg",
                "criteo_130_160": "https://seatgeek.com/images/performers-landscape/taylor-swift-310144/35/criteo_130_160.jpg",
                "criteo_170_235": "https://seatgeek.com/images/performers-landscape/taylor-swift-19e3f0/35/criteo_170_235.jpg",
                "criteo_205_100": "https://seatgeek.com/images/performers-landscape/taylor-swift-92ebf3/35/criteo_205_100.jpg",
                "criteo_400_300": "https://seatgeek.com/images/performers-landscape/taylor-swift-bab6e1/35/criteo_400_300.jpg",
                "fb_100x72": "https://seatgeek.com/images/performers-landscape/taylor-swift-c1dbf4/35/fb_100x72.jpg",
                "fb_600_315": "https://seatgeek.com/images/performers-landscape/taylor-swift-15afb9/35/fb_600_315.jpg",
                "huge": "https://seatgeek.com/images/performers-landscape/taylor-swift-c1e4b6/35/huge.jpg",
                "ipad_event_modal": "https://seatgeek.com/images/performers-landscape/taylor-swift-3ebde5/35/ipad_event_modal.jpg",
                "ipad_header": "https://seatgeek.com/images/performers-landscape/taylor-swift-a807ae/35/ipad_header.jpg",
                "ipad_mini_explore": "https://seatgeek.com/images/performers-landscape/taylor-swift-69d4a9/35/ipad_mini_explore.jpg",
                "mongo": "https://seatgeek.com/images/performers-landscape/taylor-swift-5a3f01/35/mongo.jpg",
                "square_mid": "https://seatgeek.com/images/performers-landscape/taylor-swift-db2f1f/35/square_mid.jpg",
                "triggit_fb_ad": "https://seatgeek.com/images/performers-landscape/taylor-swift-c3abf8/35/triggit_fb_ad.jpg"
              },
              "image": "https://seatgeek.com/images/performers-landscape/taylor-swift-c1e4b6/35/huge.jpg",
              "document_source": {
                "source_type": "ELASTIC",
                "generation_type": "FULL"
              }
            },
            {
              "id": 467,
              "name": "Folk",
              "slug": "folk",
              "primary": false,
              "images": {
                "1200x525": "https://seatgeek.com/images/performers-landscape/morgan-wallen-e57257/562860/1200x525.jpg",
                "1200x627": "https://seatgeek.com/images/performers-landscape/morgan-wallen-4396b5/562860/1200x627.jpg",
                "136x136": "https://seatgeek.com/images/performers-landscape/morgan-wallen-c0ab8e/562860/136x136.jpg",
                "500_700": "https://seatgeek.com/images/performers-landscape/morgan-wallen-e7796f/562860/500_700.jpg",
                "800x320": "https://seatgeek.com/images/performers-landscape/morgan-wallen-fd5151/562860/800x320.jpg",
                "banner": "https://seatgeek.com/images/performers-landscape/morgan-wallen-a26ce6/562860/banner.jpg",
                "block": "https://seatgeek.com/images/performers-landscape/morgan-wallen-bca910/562860/block.jpg",
                "criteo_130_160": "https://seatgeek.com/images/performers-landscape/morgan-wallen-f1973b/562860/criteo_130_160.jpg",
                "criteo_170_235": "https://seatgeek.com/images/performers-landscape/morgan-wallen-787c21/562860/criteo_170_235.jpg",
                "criteo_205_100": "https://seatgeek.com/images/performers-landscape/morgan-wallen-3521da/562860/criteo_205_100.jpg",
                "criteo_400_300": "https://seatgeek.com/images/performers-landscape/morgan-wallen-0ee1ce/562860/criteo_400_300.jpg",
                "fb_100x72": "https://seatgeek.com/images/performers-landscape/morgan-wallen-d3c909/562860/fb_100x72.jpg",
                "fb_600_315": "https://seatgeek.com/images/performers-landscape/morgan-wallen-02050d/562860/fb_600_315.jpg",
                "huge": "https://seatgeek.com/images/performers-landscape/morgan-wallen-31dd9b/562860/huge.jpg",
                "ipad_event_modal": "https://seatgeek.com/images/performers-landscape/morgan-wallen-1207e0/562860/ipad_event_modal.jpg",
                "ipad_header": "https://seatgeek.com/images/performers-landscape/morgan-wallen-f267c2/562860/ipad_header.jpg",
                "ipad_mini_explore": "https://seatgeek.com/images/performers-landscape/morgan-wallen-b179e6/562860/ipad_mini_explore.jpg",
                "mongo": "https://seatgeek.com/images/performers-landscape/morgan-wallen-13c7f9/562860/mongo.jpg",
                "square_mid": "https://seatgeek.com/images/performers-landscape/morgan-wallen-4ba52e/562860/square_mid.jpg",
                "triggit_fb_ad": "https://seatgeek.com/images/performers-landscape/morgan-wallen-f09a90/562860/triggit_fb_ad.jpg"
              },
              "image": "https://seatgeek.com/images/performers-landscape/morgan-wallen-31dd9b/562860/huge.jpg",
              "document_source": {
                "source_type": "ELASTIC",
                "generation_type": "FULL"
              }
            },
            {
              "id": 473,
              "name": "Hard Rock",
              "slug": "hard-rock",
              "primary": true,
              "images": {
                "1200x525": "https://seatgeek.com/images/performers-landscape/eagles-772b0c/8936/1200x525.jpg",
                "1200x627": "https://seatgeek.com/images/performers-landscape/eagles-78e364/8936/1200x627.jpg",
                "136x136": "https://seatgeek.com/images/performers-landscape/eagles-ea41a0/8936/136x136.jpg",
                "500_700": "https://seatgeek.com/images/performers-landscape/eagles-f29212/8936/500_700.jpg",
                "800x320": "https://seatgeek.com/images/performers-landscape/eagles-5aa136/8936/800x320.jpg",
                "banner": "https://seatgeek.com/images/performers-landscape/eagles-35108f/8936/banner.jpg",
                "block": "https://seatgeek.com/images/performers-landscape/eagles-e077ca/8936/block.jpg",
                "criteo_130_160": "https://seatgeek.com/images/performers-landscape/eagles-a98d16/8936/criteo_130_160.jpg",
                "criteo_170_235": "https://seatgeek.com/images/performers-landscape/eagles-baed87/8936/criteo_170_235.jpg",
                "criteo_205_100": "https://seatgeek.com/images/performers-landscape/eagles-089d53/8936/criteo_205_100.jpg",
                "criteo_400_300": "https://seatgeek.com/images/performers-landscape/eagles-c62515/8936/criteo_400_300.jpg",
                "fb_100x72": "https://seatgeek.com/images/performers-landscape/eagles-648b00/8936/fb_100x72.jpg",
                "fb_600_315": "https://seatgeek.com/images/performers-landscape/eagles-bb32f1/8936/fb_600_315.jpg",
                "huge": "https://seatgeek.com/images/performers-landscape/eagles-384fcd/8936/huge.jpg",
                "ipad_event_modal": "https://seatgeek.com/images/performers-landscape/eagles-58f63b/8936/ipad_event_modal.jpg",
                "ipad_header": "https://seatgeek.com/images/performers-landscape/eagles-07224f/8936/ipad_header.jpg",
                "ipad_mini_explore": "https://seatgeek.com/images/performers-landscape/eagles-5315ff/8936/ipad_mini_explore.jpg",
                "mongo": "https://seatgeek.com/images/performers-landscape/eagles-cd9bfd/8936/mongo.jpg",
                "square_mid": "https://seatgeek.com/images/performers-landscape/eagles-6a346c/8936/square_mid.jpg",
                "triggit_fb_ad": "https://seatgeek.com/images/performers-landscape/eagles-7d7b9f/8936/triggit_fb_ad.jpg"
              },
              "image": "https://seatgeek.com/images/performers-landscape/eagles-384fcd/8936/huge.jpg",
              "document_source": {
                "source_type": "ELASTIC",
                "generation_type": "FULL"
              }
            }
          ],
          "popularity": 0,
          "location": null,
          "image_rights_message": "(c) Bobby Bank / WireImage / Getty Images"
        }
      ],
      "is_open": false,
      "links": [ ],
      "datetime_local": "2024-02-03T15:00:00",
      "time_tbd": false,
      "short_title": "Dan Bern",
      "visible_until_utc": "2024-02-04T00:00:00",
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
          "id": 2000000,
          "name": "concert",
          "parent_id": null,
          "rank": 1,
          "seo_event_type": ""
        }
      ],
      "url": "https://seatgeek.com/dan-bern-tickets/saratoga-springs-new-york-caffe-lena-1-2024-02-03-3-pm/concert/6362997",
      "score": 0,
      "announce_date": "2023-12-17T00:00:00",
      "created_at": "2024-01-24T06:55:44",
      "date_tbd": false,
      "title": "Dan Bern",
      "popularity": 0,
      "description": "",
      "status": "normal",
      "access_method": null,
      "event_promotion": null,
      "announcements": { },
      "conditional": false,
      "enddatetime_utc": null,
      "visible_at": "2024-01-24T07:34:17Z",
      "is_visible_override": "UNSET",
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
    "total": 174,
    "took": 27,
    "page": 1,
    "per_page": 10,
    "geolocation": {
      "lat": 43.0056,
      "lon": -73.8628,
      "city": "Ballston Spa",
      "state": "NY",
      "country": "US",
      "postal_code": "12020",
      "display_name": "Ballston Spa, NY",
      "metro_code": "532",
      "range": "100mi"
    }
  }
}





*/