// https://imooc-front.lgdsunday.club/member
export default [
  {
    url: '/api/category', //这里的api相当于公共请求头，根据自己的需要修改
    method: 'get',
    response: ({ query }) => {
      return {
        success: true,
        code: 200,
        data: {
          categorys: [
            {
              id: 'web_app_icon',
              name: 'UI/UX',
              col: 1,
              urlname: 'web_app_icon'
            },
            {
              id: 'design',
              name: '平面',
              col: 1,
              urlname: 'design'
            },
            {
              id: 'illustration',
              name: '插画/漫画',
              col: 1,
              urlname: 'illustration'
            },
            {
              id: 'photography',
              name: '摄影',
              col: 2,
              urlname: 'photography'
            },
            {
              id: 'games',
              name: '游戏',
              urlname: 'games'
            },
            {
              id: 'anime',
              name: '动漫',
              urlname: 'anime'
            },
            {
              id: 'industrial_design',
              name: '工业设计',
              col: 2,
              urlname: 'industrial_design'
            },
            {
              id: 'architecture',
              name: '建筑设计',
              urlname: 'architecture'
            },
            {
              id: 'art',
              name: '人文艺术',
              urlname: 'art'
            },
            {
              id: 'home',
              name: '家居/家装',
              col: 1,
              urlname: 'home'
            },
            {
              id: 'apparel',
              name: '女装/搭配',
              col: 1,
              urlname: 'apparel'
            },
            {
              id: 'men',
              name: '男士/风尚',
              col: 2,
              urlname: 'men'
            },
            {
              id: 'modeling_hair',
              name: '造型/美妆',
              urlname: 'modeling_hair'
            },
            {
              id: 'diy_crafts',
              name: '手工/布艺',
              urlname: 'diy_crafts'
            },
            {
              id: 'food_drink',
              name: '美食',
              urlname: 'food_drink'
            },
            {
              id: 'travel_places',
              name: '旅行',
              urlname: 'travel_places'
            },
            {
              id: 'wedding_events',
              name: '婚礼',
              col: 2,
              urlname: 'wedding_events'
            },
            {
              id: 'kids',
              name: '儿童',
              urlname: 'kids'
            },
            {
              id: 'pets',
              name: '宠物',
              urlname: 'pets'
            },
            {
              id: 'quotes',
              name: '美图',
              urlname: 'quotes'
            },
            {
              id: 'people',
              name: '明星',
              urlname: 'people'
            },
            {
              id: 'beauty',
              name: '美女',
              urlname: 'beauty'
            },
            {
              id: 'desire',
              name: '礼物',
              urlname: 'desire'
            },
            {
              id: 'geek',
              name: '极客',
              urlname: 'geek'
            },
            {
              id: 'data_presentation',
              name: '数据图',
              urlname: 'data_presentation'
            },
            {
              id: 'cars_motorcycles',
              name: '汽车/摩托',
              urlname: 'cars_motorcycles'
            },
            {
              id: 'film_music_books',
              name: '电影/图书',
              urlname: 'film_music_books'
            },
            {
              id: 'tips',
              name: '生活百科',
              urlname: 'tips'
            },
            {
              id: 'education',
              name: '教育',
              urlname: 'education'
            },
            {
              id: 'sports',
              name: '运动',
              urlname: 'sports'
            },
            {
              id: 'funny',
              name: '搞笑',
              urlname: 'funny'
            }
          ]
        },
        message: 'success'
      }
    }
  },
  {
    url: '/api/pexels/list', //这里的api相当于公共请求头，根据自己的需要修改
    method: 'get',
    response: ({ query }) => {
      return {
        success: true,
        code: 200,
        data: {
          list: [
            {
              tags: ['all', 'home', 'desire', 'pets'],
              _id: '62208123fb7e8b6da85b7dfe',
              photoLink: 'https://www.pexels.com/zh-cn/photo/8051987/',
              photo:
                'https://images.pexels.com/photos/8051987/pexels-photo-8051987.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
              authorLike:
                'https://www.pexels.com/zh-cn/@ugurcan-ozmen-61083217',
              avatar:
                'https://images.pexels.com/users/avatars/61083217/ugurcan-ozmen-235.jpeg?auto=compress&fit=crop&h=60&w=60',
              author: 'Uğurcan Özmen',
              photoDownLink: 'https://www.pexels.com/photo/8051987/download/',
              id: '8051987',
              title: '图片数据来自 pexels ',
              photoWidth: 500,
              photoHeight: 625,
              photoType: 'jpg',
              __v: 0
            },
            {
              tags: [
                'all',
                'food_drink',
                'people',
                'cars_motorcycles',
                'industrial_design',
                'wedding_events'
              ],
              _id: '62208123fb7e8b6da85b7dff',
              photoLink: 'https://www.pexels.com/zh-cn/photo/10311898/',
              photo:
                'https://images.pexels.com/photos/10311898/pexels-photo-10311898.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
              authorLike:
                'https://www.pexels.com/zh-cn/@rodrigo-pederzini-102497840',
              avatar:
                'https://images.pexels.com/users/avatars/102497840/rodrigo-pederzini-633.jpeg?auto=compress&fit=crop&h=60&w=60',
              author: 'Rodrigo  Pederzini',
              photoDownLink: 'https://www.pexels.com/photo/10311898/download/',
              id: '10311898',
              title: '图片数据来自 pexels ',
              photoWidth: 500,
              photoHeight: 625,
              photoType: 'jpg',
              __v: 0
            },
            {
              tags: ['all', 'kids', 'people', 'film_music_books', 'tips'],
              _id: '62208123fb7e8b6da85b7e00',
              photoLink: 'https://www.pexels.com/zh-cn/photo/5313576/',
              photo:
                'https://images.pexels.com/photos/5313576/pexels-photo-5313576.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
              authorLike: 'https://www.pexels.com/zh-cn/@stephanlouis',
              avatar:
                'https://images.pexels.com/users/avatars/3470573/stephan-louis-639.jpeg?auto=compress&fit=crop&h=60&w=60',
              author: 'Stephan Louis',
              photoDownLink: 'https://www.pexels.com/photo/5313576/download/',
              id: '5313576',
              title: '图片数据来自 pexels ',
              photoWidth: 500,
              photoHeight: 750,
              photoType: 'jpg',
              __v: 0
            },
            {
              tags: ['all', 'games', 'illustration', 'sports', 'funny'],
              _id: '62208123fb7e8b6da85b7e01',
              photoLink: 'https://www.pexels.com/zh-cn/photo/9909478/',
              photo:
                'https://images.pexels.com/photos/9909478/pexels-photo-9909478.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
              authorLike: 'https://www.pexels.com/zh-cn/@lenar-92376376',
              avatar:
                'https://images.pexels.com/users/avatars/92376376/lenar-382.jpeg?auto=compress&fit=crop&h=60&w=60',
              author: 'Lenar',
              photoDownLink: 'https://www.pexels.com/photo/9909478/download/',
              id: '9909478',
              title: '图片数据来自 pexels ',
              photoWidth: 500,
              photoHeight: 625,
              photoType: 'jpg',
              __v: 0
            },
            {
              tags: [
                'all',
                'diy_crafts',
                'modeling_hair',
                'wedding_events',
                'pets'
              ],
              _id: '62208123fb7e8b6da85b7e02',
              photoLink: 'https://www.pexels.com/zh-cn/photo/10269916/',
              photo:
                'https://images.pexels.com/photos/10269916/pexels-photo-10269916.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
              authorLike: 'https://www.pexels.com/zh-cn/@kassiamelox',
              avatar:
                'https://images.pexels.com/users/avatars/100707831/kassia-melo-624.jpeg?auto=compress&fit=crop&h=60&w=60',
              author: 'Kássia Melo',
              photoDownLink: 'https://www.pexels.com/photo/10269916/download/',
              id: '10269916',
              title: '图片数据来自 pexels ',
              photoWidth: 500,
              photoHeight: 333,
              photoType: 'jpg',
              __v: 0
            },
            {
              tags: [
                'all',
                'anime',
                'quotes',
                'design',
                'home',
                'wedding_events'
              ],
              _id: '62208123fb7e8b6da85b7e03',
              photoLink: 'https://www.pexels.com/zh-cn/photo/9718332/',
              photo:
                'https://images.pexels.com/photos/9718332/pexels-photo-9718332.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
              authorLike: 'https://www.pexels.com/zh-cn/@soulofmurcidus',
              avatar:
                'https://images.pexels.com/users/avatars/82251264/murcidus-soul-281.jpeg?auto=compress&fit=crop&h=60&w=60',
              author: 'Yaroslav Chaadaev',
              photoDownLink: 'https://www.pexels.com/photo/9718332/download/',
              id: '9718332',
              title: '图片数据来自 pexels ',
              photoWidth: 500,
              photoHeight: 750,
              photoType: 'jpg',
              __v: 0
            },
            {
              tags: ['all', 'apparel', 'anime', 'beauty', 'kids'],
              _id: '62208123fb7e8b6da85b7e04',
              photoLink: 'https://www.pexels.com/zh-cn/photo/9437675/',
              photo:
                'https://images.pexels.com/photos/9437675/pexels-photo-9437675.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
              authorLike: 'https://www.pexels.com/zh-cn/@ivanxolod',
              avatar:
                'https://images.pexels.com/users/avatars/73724754/ivan-xolod-423.jpeg?auto=compress&fit=crop&h=60&w=60',
              author: 'Ivan Xolod',
              photoDownLink: 'https://www.pexels.com/photo/9437675/download/',
              id: '9437675',
              title: '图片数据来自 pexels ',
              photoWidth: 500,
              photoHeight: 750,
              photoType: 'jpg',
              __v: 0
            },
            {
              tags: ['all', 'tips'],
              _id: '62208123fb7e8b6da85b7e05',
              photoLink: 'https://www.pexels.com/zh-cn/photo/5702929/',
              photo:
                'https://images.pexels.com/photos/5702929/pexels-photo-5702929.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
              authorLike: 'https://www.pexels.com/zh-cn/@ekaterina-bolovtsova',
              avatar:
                'https://images.pexels.com/users/avatars/2408093/ekaterina-bolovtsova-287.jpeg?auto=compress&fit=crop&h=60&w=60',
              author: 'EKATERINA  BOLOVTSOVA',
              photoDownLink: 'https://www.pexels.com/photo/5702929/download/',
              id: '5702929',
              title: '图片数据来自 pexels ',
              photoWidth: 500,
              photoHeight: 750,
              photoType: 'jpg',
              __v: 0
            },
            {
              tags: [
                'all',
                'wedding_events',
                'architecture',
                'illustration',
                'pets',
                'industrial_design',
                'tips',
                'anime'
              ],
              _id: '62208123fb7e8b6da85b7e06',
              photoLink: 'https://www.pexels.com/zh-cn/photo/8536208/',
              photo:
                'https://images.pexels.com/photos/8536208/pexels-photo-8536208.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
              authorLike:
                'https://www.pexels.com/zh-cn/@yulia-polyakova-73722901',
              avatar:
                'https://images.pexels.com/users/avatars/73722901/-918.jpeg?auto=compress&fit=crop&h=60&w=60',
              author: 'Yulia  Polyakova',
              photoDownLink: 'https://www.pexels.com/photo/8536208/download/',
              id: '8536208',
              title: '图片数据来自 pexels ',
              photoWidth: 500,
              photoHeight: 667,
              photoType: 'jpg',
              __v: 0
            },
            {
              tags: ['all', 'men', 'sports', 'diy_crafts'],
              _id: '62208123fb7e8b6da85b7e07',
              photoLink: 'https://www.pexels.com/zh-cn/photo/8957086/',
              photo:
                'https://images.pexels.com/photos/8957086/pexels-photo-8957086.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
              authorLike: 'https://www.pexels.com/zh-cn/@alina-kurson-80193566',
              avatar:
                'https://images.pexels.com/users/avatars/80193566/alina-kurson-977.jpeg?auto=compress&fit=crop&h=60&w=60',
              author: 'Alina Kurson',
              photoDownLink: 'https://www.pexels.com/photo/8957086/download/',
              id: '8957086',
              title: '图片数据来自 pexels ',
              photoWidth: 500,
              photoHeight: 331,
              photoType: 'jpg',
              __v: 0
            },
            {
              tags: ['all', 'pets', 'web_app_icon', 'illustration', 'anime'],
              _id: '62208123fb7e8b6da85b7e08',
              photoLink: 'https://www.pexels.com/zh-cn/photo/8771023/',
              photo:
                'https://images.pexels.com/photos/8771023/pexels-photo-8771023.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
              authorLike: 'https://www.pexels.com/zh-cn/@79786369',
              avatar:
                'https://images.pexels.com/users/avatars/79786369/-702.jpeg?auto=compress&fit=crop&h=60&w=60',
              author: 'Никита Семехин',
              photoDownLink: 'https://www.pexels.com/photo/8771023/download/',
              id: '8771023',
              title: '图片数据来自 pexels ',
              photoWidth: 500,
              photoHeight: 750,
              photoType: 'jpg',
              __v: 0
            },
            {
              tags: ['all', 'cars_motorcycles', 'beauty'],
              _id: '62208123fb7e8b6da85b7e09',
              photoLink: 'https://www.pexels.com/zh-cn/photo/10220774/',
              photo:
                'https://images.pexels.com/photos/10220774/pexels-photo-10220774.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
              authorLike: 'https://www.pexels.com/zh-cn/@plantsandgraphics',
              avatar:
                'https://images.pexels.com/users/avatars/22209501/kouki-170.jpeg?auto=compress&fit=crop&h=60&w=60',
              author: 'Kulbir',
              photoDownLink: 'https://www.pexels.com/photo/10220774/download/',
              id: '10220774',
              title: '图片数据来自 pexels ',
              photoWidth: 500,
              photoHeight: 580,
              photoType: 'jpg',
              __v: 0
            },
            {
              tags: [
                'all',
                'funny',
                'design',
                'diy_crafts',
                'film_music_books',
                'beauty',
                'people'
              ],
              _id: '62208123fb7e8b6da85b7e0a',
              photoLink: 'https://www.pexels.com/zh-cn/photo/3416825/',
              photo:
                'https://images.pexels.com/photos/3416825/pexels-photo-3416825.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
              authorLike: 'https://www.pexels.com/zh-cn/@storybyphil',
              avatar:
                'https://images.pexels.com/users/avatars/1226422/phil-desforges-337.jpeg?auto=compress&fit=crop&h=60&w=60',
              author: 'Phil Desforges',
              photoDownLink: 'https://www.pexels.com/photo/3416825/download/',
              id: '3416825',
              title: '图片数据来自 pexels ',
              photoWidth: 500,
              photoHeight: 750,
              photoType: 'jpg',
              __v: 0
            },
            {
              tags: ['all', 'tips', 'quotes'],
              _id: '62208123fb7e8b6da85b7e0b',
              photoLink: 'https://www.pexels.com/zh-cn/photo/9473117/',
              photo:
                'https://images.pexels.com/photos/9473117/pexels-photo-9473117.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
              authorLike: 'https://www.pexels.com/zh-cn/@dinnow-86001860',
              avatar:
                'https://images.pexels.com/users/avatars/86001860/claudino-alves-268.jpeg?auto=compress&fit=crop&h=60&w=60',
              author: 'Dinnow',
              photoDownLink: 'https://www.pexels.com/photo/9473117/download/',
              id: '9473117',
              title: '图片数据来自 pexels ',
              photoWidth: 500,
              photoHeight: 640,
              photoType: 'jpg',
              __v: 0
            },
            {
              tags: ['all', 'travel_places', 'funny'],
              _id: '62208123fb7e8b6da85b7e0c',
              photoLink: 'https://www.pexels.com/zh-cn/photo/8480056/',
              photo:
                'https://images.pexels.com/photos/8480056/pexels-photo-8480056.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
              authorLike: 'https://www.pexels.com/zh-cn/@unlime',
              avatar:
                'https://images.pexels.com/users/avatars/64456087/-473.jpeg?auto=compress&fit=crop&h=60&w=60',
              author: 'Nikolai Lapshin',
              photoDownLink: 'https://www.pexels.com/photo/8480056/download/',
              id: '8480056',
              title: '图片数据来自 pexels ',
              photoWidth: 500,
              photoHeight: 667,
              photoType: 'jpg',
              __v: 0
            },
            {
              tags: ['all', 'industrial_design', 'art', 'geek', 'diy_crafts'],
              _id: '62208123fb7e8b6da85b7e0d',
              photoLink: 'https://www.pexels.com/zh-cn/photo/9292154/',
              photo:
                'https://images.pexels.com/photos/9292154/pexels-photo-9292154.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
              authorLike: 'https://www.pexels.com/zh-cn/@sashmere',
              avatar:
                'https://images.pexels.com/users/avatars/1396426/sasha-prasastika-757.jpeg?auto=compress&fit=crop&h=60&w=60',
              author: 'Sasha Prasastika',
              photoDownLink: 'https://www.pexels.com/photo/9292154/download/',
              id: '9292154',
              title: '图片数据来自 pexels ',
              photoWidth: 500,
              photoHeight: 754,
              photoType: 'jpg',
              __v: 0
            },
            {
              tags: [
                'all',
                'modeling_hair',
                'web_app_icon',
                'cars_motorcycles',
                'anime',
                'travel_places'
              ],
              _id: '62208123fb7e8b6da85b7e0e',
              photoLink: 'https://www.pexels.com/zh-cn/photo/10808067/',
              photo:
                'https://images.pexels.com/photos/10808067/pexels-photo-10808067.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
              authorLike: 'https://www.pexels.com/zh-cn/@fotios-photos',
              avatar:
                'https://images.pexels.com/users/avatars/26735/lisa-fotios-617.jpeg?auto=compress&fit=crop&h=60&w=60',
              author: 'Lisa Fotios',
              photoDownLink: 'https://www.pexels.com/photo/10808067/download/',
              id: '10808067',
              title: '图片数据来自 pexels ',
              photoWidth: 500,
              photoHeight: 609,
              photoType: 'jpg',
              __v: 0
            },
            {
              tags: [
                'all',
                'illustration',
                'tips',
                'kids',
                'cars_motorcycles',
                'industrial_design',
                'modeling_hair'
              ],
              _id: '62208123fb7e8b6da85b7e0f',
              photoLink: 'https://www.pexels.com/zh-cn/photo/10314317/',
              photo:
                'https://images.pexels.com/photos/10314317/pexels-photo-10314317.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
              authorLike: 'https://www.pexels.com/zh-cn/@1434506',
              avatar:
                'https://images.pexels.com/users/avatars/1434506/-499.png?auto=compress&fit=crop&h=60&w=60',
              author: '戴安娜·多瑙河',
              photoDownLink: 'https://www.pexels.com/photo/10314317/download/',
              id: '10314317',
              title: '图片数据来自 pexels ',
              photoWidth: 500,
              photoHeight: 750,
              photoType: 'jpg',
              __v: 0
            },
            {
              tags: ['all', 'desire', 'kids'],
              _id: '62208123fb7e8b6da85b7e10',
              photoLink: 'https://www.pexels.com/zh-cn/photo/9912164/',
              photo:
                'https://images.pexels.com/photos/9912164/pexels-photo-9912164.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
              authorLike: 'https://www.pexels.com/zh-cn/@klaudia-ekert-1198089',
              avatar:
                'https://images.pexels.com/users/avatars/1198089/klaudia-ekert-203.jpeg?auto=compress&fit=crop&h=60&w=60',
              author: 'Klaudia Ekert',
              photoDownLink: 'https://www.pexels.com/photo/9912164/download/',
              id: '9912164',
              title: '图片数据来自 pexels ',
              photoWidth: 500,
              photoHeight: 750,
              photoType: 'jpg',
              __v: 0
            },
            {
              tags: [
                'all',
                'wedding_events',
                'men',
                'cars_motorcycles',
                'travel_places',
                'sports'
              ],
              _id: '62208123fb7e8b6da85b7e11',
              photoLink: '',
              photo:
                'https://images.pexels.com/videos/8871287/pexels-photo-8871287.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
              authorLike: 'https://www.pexels.com/zh-cn/@3525678',
              avatar:
                'https://images.pexels.com/users/avatars/3525678/-897.jpeg?auto=compress&fit=crop&h=60&w=60',
              author: '宇航 钱',
              photoDownLink:
                'https://www.pexels.com/zh-cn/video/8871287/download/',
              title: '图片数据来自 pexels ',
              photoWidth: 500,
              photoHeight: 889,
              photoType: 'jpg',
              __v: 0
            }
          ],
          total: 533,
          page: '1',
          size: '20'
        },
        message: 'success'
      }
    }
  },
  {
    url: '/api/pexels/page', //这里的api相当于公共请求头，根据自己的需要修改
    method: 'get',
    response: ({ query }) => {
      return {
        success: true,
        code: 200,
        data: [
          {
            id: 0,
            title: '连续包月',
            desc: '次月 ¥19 续费,可随时取消',
            oldPrice: '29',
            price: '9',
            isHot: true
          },
          {
            id: 1,
            title: '连续包年',
            desc: '次月 ¥198 续费,可随时取消',
            oldPrice: '258',
            price: '198',
            isHot: false
          },
          {
            id: 2,
            title: '连续包季',
            desc: '次月 ¥53 续费,可随时取消',
            oldPrice: '68',
            price: '53',
            isHot: false
          },
          {
            id: 3,
            title: '月卡',
            desc: '',
            oldPrice: '39',
            price: '29',
            isHot: false
          },
          {
            id: 4,
            title: '季卡',
            desc: '',
            oldPrice: '79',
            price: '68',
            isHot: false
          },
          {
            id: 5,
            title: '年卡',
            desc: '',
            oldPrice: '298',
            price: '258',
            isHot: false
          }
        ],
        message: 'success'
      }
    }
  },
  {
    url: '/api/pexels/hint',
    method: 'GET',
    response: ({ query }) => {
      return {
        success: true,
        code: 200,
        data: {
          total: 97,
          result: [
            '1920x1080',
            '1626',
            '1元购',
            '12306',
            '1920背景',
            '1周年',
            '123',
            '100',
            '19天',
            '19'
          ]
        },
        message: 'success'
      }
    }
  },
  {
    url: '/api/pexels/themes',
    method: 'GET',
    response: ({ query }) => {
      return {
        success: true,
        code: 200,
        data: {
          themes: [
            {
              id: 'Parenting',
              photo:
                'https://images.pexels.com/photos/3663038/pexels-photo-3663038.jpeg?auto=compress&cs=tinysrgb&dpr=1&fit=crop&h=250&w=360',
              title: '亲子'
            },
            {
              id: 'green',
              photo:
                'https://images.pexels.com/photos/8117889/pexels-photo-8117889.jpeg?auto=compress&cs=tinysrgb&dpr=1&fit=crop&h=250&w=360',
              title: '绿色'
            },
            {
              id: 'black theme',
              photo:
                'https://images.pexels.com/photos/1356300/pexels-photo-1356300.jpeg?auto=compress&cs=tinysrgb&dpr=1&fit=crop&h=250&w=360',
              title: '黑色'
            },
            {
              id: 'Botany',
              photo:
                'https://images.pexels.com/photos/212940/pexels-photo-212940.jpeg?auto=compress&cs=tinysrgb&dpr=1&fit=crop&h=250&w=360',
              title: '植物'
            },
            {
              id: 'Happy Feet',
              photo:
                'https://images.pexels.com/photos/631988/pexels-photo-631988.jpeg?auto=compress&cs=tinysrgb&dpr=1&fit=crop&h=250&w=360',
              title: '快乐'
            },
            {
              id: 'Like a breath of fresh air',
              photo:
                'https://images.pexels.com/photos/7412111/pexels-photo-7412111.jpeg?auto=compress&cs=tinysrgb&dpr=1&fit=crop&h=250&w=360',
              title: '小清新'
            },
            {
              id: 'food photography',
              photo:
                'https://images.pexels.com/photos/1652312/pexels-photo-1652312.jpeg?auto=compress&cs=tinysrgb&dpr=1&fit=crop&h=250&w=360',
              title: '美食摄影'
            }
          ]
        },
        message: 'success'
      }
    }
  },
  {
    url: '/api/pexelss/captcha',
    method: 'GET',
    response: ({ query }) => {
      return {
        success: true,
        code: 200,
        data: true,
        message: '验证成功！'
      }
    }
  },
  {
    url: '/api/user/profile',
    method: 'GET',
    response: ({ query }) => {
      return {
        success: true,
        code: 200,
        data: {
          qqOpenId: '',
          wxOpenId: 'oDafJ5-b6dMT9pw2ABMhjtwuVdnE',
          nickname: 'zhhhh',
          title: '前端开发',
          company: '111',
          homePage: '111',
          introduction: '1111',
          vipLevel: 0,
          regTime: '2022-05-09T03:01:09.604Z',
          avatar:
            'http://imooc-front.oss-cn-beijing.aliyuncs.com/images/zhhhh/1689059038193.png',
          outTradeNo: 'f62f077e-0297-4c23-8712-7db1c7b1f4f5',
          payResult: false,
          _id: '627a02eb2c52984b0364364c',
          username: 'admin',
          __v: 0
        },
        message: 'success'
      }
    }
  },
  {
    url: '/api/sys/login',
    method: 'GET',
    response: () => {
      return {
        success: true,
        code: 200,
        data: {
          token: '740487ce-9296-47b3-b425-dd40713532c3'
        },
        message: '登录成功'
      }
    }
  },
  {
    url: '/api/pexels/:id',
    method: 'GET',
    response: ({ query }) => {
      return {
        success: true,
        code: 200,
        data: {
          tags: ['all', 'home', 'desire', 'pets'],
          _id: '62208123fb7e8b6da85b7dfe',
          photoLink: 'https://www.pexels.com/zh-cn/photo/8051987/',
          photo:
            'https://images.pexels.com/photos/8051987/pexels-photo-8051987.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
          authorLike: 'https://www.pexels.com/zh-cn/@ugurcan-ozmen-61083217',
          avatar:
            'https://images.pexels.com/users/avatars/61083217/ugurcan-ozmen-235.jpeg?auto=compress&fit=crop&h=60&w=60',
          author: 'Uğurcan Özmen',
          photoDownLink: 'https://www.pexels.com/photo/8051987/download/',
          id: '8051987',
          title: '图片数据来自 pexels ',
          photoWidth: 500,
          photoHeight: 625,
          photoType: 'jpg',
          __v: 0
        },
        message: 'success'
      }
    }
  },
  {
    url: '/api/user/vip/pay/list',
    method: 'GET',
    response: ({ query }) => {
      return {
        success: true,
        code: 200,
        data: [
          {
            id: 0,
            title: '连续包月',
            desc: '次月 ¥19 续费,可随时取消',
            oldPrice: '29',
            price: '9',
            isHot: true
          },
          {
            id: 1,
            title: '连续包年',
            desc: '次月 ¥198 续费,可随时取消',
            oldPrice: '258',
            price: '198',
            isHot: false
          },
          {
            id: 2,
            title: '连续包季',
            desc: '次月 ¥53 续费,可随时取消',
            oldPrice: '68',
            price: '53',
            isHot: false
          },
          {
            id: 3,
            title: '月卡',
            desc: '',
            oldPrice: '39',
            price: '29',
            isHot: false
          },
          {
            id: 4,
            title: '季卡',
            desc: '',
            oldPrice: '79',
            price: '68',
            isHot: false
          },
          {
            id: 5,
            title: '年卡',
            desc: '',
            oldPrice: '298',
            price: '258',
            isHot: false
          }
        ],
        message: 'success'
      }
    }
  }
]
