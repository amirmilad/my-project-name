import { Project, ConstructionUpdate, NewsItem } from '../types';
import {
  STODA_IMAGES,
  THE_CREST_IMAGES,
  VEA_IMAGES,
  GO_HELIOPOLIS_IMAGES,
  GLEN_IMAGES,
  C_NORTH_IMAGES,
  CREEK_TOWN_IMAGES,
  SAFIA_CLEAN_IMAGES,
  WESTDAYS_IMAGES,
  PARKSIGHT_IMAGES
} from './projectImages';

export const PROJECTS_DATA: Project[] = [
  {
    id: 'c-north',
    name: 'C North',
    nameAr: 'سي نورث رأس الحكمة',
    slug: 'c-north',
    category: 'RESIDENTIAL',
    categoryAr: 'سكني ساحلي فاخر',
    location: 'KM 182 Ras El Hekma Bay, North Coast',
    locationAr: 'الكيلو 182 خليج رأس الحكمة، الساحل الشمالي',
    region: 'North Coast',
    regionAr: 'الساحل الشمالي',
    coordinates: {
      lat: 31.0800,
      lng: 28.1500
    },
    image: C_NORTH_IMAGES.main,
    heroImage: C_NORTH_IMAGES.hero,
    gallery: C_NORTH_IMAGES.gallery,
    description: 'C NORTH is IL CAZAR’s ultra-exclusive Mediterranean sanctuary along the pristine sands of Ras El Hekma. Designed with cascading sea view elevations and crystal lagoons, C NORTH offers modern coastal villas and luxury chalets designed for private summer bliss.',
    descriptionAr: 'سي نورث هو منتجع إل كازار الساحلي الفاخر على رمال خليج رأس الحكمة الساحرة بالساحل الشمالي. صُمم المشروع على مصاطب متدرجة طبيعية توفر إطلالات بانورامية مفتوحة على مياه البحر الأبيض المتوسط الفيروزية والبحيرات الكريستالية الصالحة للسباحة، مع تشكيلة فريدة من الشاليهات والفيلات الساحلية الفاخرة.',
    shortDescription: 'Unrivaled Mediterranean luxury retreat in KM 182 Ras El Hekma with private beach access & crystal lagoons.',
    shortDescriptionAr: 'منتجع ساحلي فاخر واستثنائي في الكيلو 182 رأس الحكمة مع شاطئ رملي خاص وبحيرات كريستالية متدفقة.',
    tagline: 'Your Private Beachfront Sanctuary in Ras El Hekma',
    taglineAr: 'ملاذك الشاطئي الخاص على مياه رأس الحكمة الفيروزية',
    landArea: '140 Feddans',
    landAreaAr: '140 فدان',
    footprint: '15% Built-Up / 85% Swimmable Lagoons & Greenery',
    footprintAr: '15% مباني / 85% بحيرات كريستالية ومساحات خضراء',
    status: 'New Launch',
    statusAr: 'طرح جديد حصري',
    startingPrice: '8,500,000 EGP',
    startingPriceAr: '8,500,000 جنيه مصري',
    paymentPlan: '2.5% Down Payment, Up to 10 Years Installments (EOI 100K/150K/200K)',
    paymentPlanAr: 'مقدم 2.5% وأقساط تصل حتى 10 سنوات (جدية حجز 100 ألف / 150 ألف / 200 ألف)',
    deliveryDate: '4 Years',
    deliveryDateAr: 'خلال 4 سنوات',
    highlights: [
      'Prime location in KM 182 Ras El Hekma Bay',
      '100% Swimmable Crystal Lagoons & Sandy Beaches',
      'Private Beach Club & Watersports Hub',
      'Cascading Tiers for Panoramic Mediterranean Views',
      'Fully Finished Luxury Units'
    ],
    highlightsAr: [
      'موقع استراتيجي في الكيلو 182 خليج رأس الحكمة',
      'بحيرات كريستالية صالحة للسباحة وشواطئ رملية خاصة',
      'كلوب هاوس شاطئي ونادٍ للرياضات المائية',
      'مصاطب متدرجة لضمان رؤية بانورامية كاملة للبحر',
      'وحدات كاملة التشطيب بأعلى معايير الجودة'
    ],
    nearbyLandmarks: [
      { name: 'Fouka Road Bay Exit', nameAr: 'مخرج طريق الفوكا', distance: '6 Mins', distanceAr: '6 دقائق' },
      { name: 'Alamein International Airport', nameAr: 'مطار العلمين الدولي', distance: '28 Mins', distanceAr: '28 دقيقة' },
      { name: 'Hacienda Bay', nameAr: 'هاسيندا باي', distance: '20 Mins', distanceAr: '20 دقيقة' }
    ],
    aboutProject: {
      overview: 'C NORTH is IL CAZAR’s ultra-exclusive Mediterranean sanctuary along the pristine sands of Ras El Hekma. Spanning across cascading coastal elevations, the project offers crystal lagoons, beach clubs, and serene coastal architecture.',
      locationDetails: 'Situated directly at KM 182 Ras El Hekma Bay, North Coast along the Alex-Matrouh Road, with effortless access from the Fouka Road and Al Dabaa Corridor, just minutes from Almaza Bay.',
      masterPlanDetails: 'Master-planned on terraced natural elevations to guarantee sea views for 100% of residences, featuring swimmable crystal lagoons, lush parks, and private beach walkways.',
      unitTypesDetails: 'Includes luxury sea-view chalets (2-3 bedrooms), townhouses, and standalone beachfront villas starting from 8,500,000 EGP with flexible payment plans up to 10 years.'
    },
    aboutProjectAr: {
      overview: 'سي نورث هو مجتمع ساحلي سياحي فائق الفخامة من شركة إل كازار للتطوير العقاري، مصمم لتقديم أسلوب حياة استثنائي يجمع بين الطبيعة البحرية الساحرة وأحدث معايير العمارة الحديثة مع بحيرات كريستالية ولاجونز ممتدة.',
      locationDetails: 'يقع المشروع في الكيلو 182 خليج رأس الحكمة بالساحل الشمالي على طريق الإسكندرية - مطروح، بالقرب من طريق الفوكا ومحور الضبعة، وعلى بعد دقائق معدودة من خليج ألماظة ومدينة العلمين الجديدة.',
      masterPlanDetails: 'يمتد المشروع على مساحة 140 فدانًا تم تخطيطها هندسيًا بنظام المصاطب الطبيعية بارتفاعات مدروسة تضمن لجميع الوحدات الاستمتاع بإطلالة مباشرة على مياه البحر الصافية واللاجونز مع تخصيص 85% للمساحات المفتوحة.',
      unitTypesDetails: 'يوفر تشكيلة متنوعة من الشاليهات الفاخرة (غرفتين و3 غرف)، وفيلات التاون هاوس، والفيلات المستقلة المطلة على الشاطئ بأسعار تبدأ من 8,500,000 جنيه مصري بمقدم 2.5% وفترات سداد مريحة تصل إلى 10 سنوات.'
    },
    unitTypes: [
      {
        id: 'cnorth-2bd-chalet',
        title: '2 Bedrooms Chalet',
        titleAr: 'شاليه 2 غرفة نوم',
        sizeRange: '95 sqm',
        bedroomCount: '2 Bedrooms',
        bedroomCountAr: '2 غرفة نوم',
        startingPrice: '8,500,000 EGP',
        startingPriceAr: '8,500,000 جنيه مصري',
        features: ['Fully Finished', 'Lagoon View', 'Terrace'],
        featuresAr: ['تشطيب كامل سوبر لوكس', 'إطلالة على البحيرات الكريستالية', 'تراس خاص'],
        image: C_NORTH_IMAGES.chalet2bd
      },
      {
        id: 'cnorth-3bd-chalet',
        title: '3 Bedrooms Chalet',
        titleAr: 'شاليه 3 غرف نوم',
        sizeRange: '120 sqm',
        bedroomCount: '3 Bedrooms',
        bedroomCountAr: '3 غرف نوم',
        startingPrice: '10,500,000 EGP',
        startingPriceAr: '10,500,000 جنيه مصري',
        features: ['Fully Finished', 'Swimmable Lagoon Access'],
        featuresAr: ['تشطيب كامل فاخر', 'دخول مباشر للبحيرات الكريستالية'],
        image: C_NORTH_IMAGES.chalet3bd
      },
      {
        id: 'cnorth-q-villa',
        title: 'Q Villa',
        titleAr: 'كيو فيلا (Q Villa)',
        sizeRange: '155 sqm',
        bedroomCount: '3 - 4 Bedrooms',
        bedroomCountAr: '3 - 4 غرف نوم',
        startingPrice: '15,500,000 EGP',
        startingPriceAr: '15,500,000 جنيه مصري',
        features: ['Private Garden', 'Lagoon & Sea Views', 'Rooftop Lounge'],
        featuresAr: ['حديقة خاصة', 'إطلالة مزدوجة على البحر واللاجون', 'رووف لاونج خاص'],
        image: C_NORTH_IMAGES.qvilla
      },
      {
        id: 'cnorth-townhouse',
        title: 'Townhouse',
        titleAr: 'تاون هاوس',
        sizeRange: '185 sqm',
        bedroomCount: '4 Bedrooms',
        bedroomCountAr: '4 غرف نوم',
        startingPrice: '19,500,000 EGP',
        startingPriceAr: '19,500,000 جنيه مصري',
        features: ['Private Landscaped Garden', 'Panoramic Views', 'Maid Room'],
        featuresAr: ['حديقة خاصة منسقة', 'إطلالات بانورامية مفتوحة', 'غرفة للمربية مع حمام'],
        image: C_NORTH_IMAGES.townhouse
      },
      {
        id: 'cnorth-standalone',
        title: 'Standalone Beachfront Villa',
        titleAr: 'فيلا مستقلة على الشاطئ',
        sizeRange: '260 - 350 sqm',
        bedroomCount: '5 - 6 Bedrooms',
        bedroomCountAr: '5 - 6 غرف نوم',
        startingPrice: '32,000,000 EGP',
        startingPriceAr: '32,000,000 جنيه مصري',
        features: ['Direct Beachfront Access', 'Infinity Pool', 'Private Parking & Driver Room'],
        featuresAr: ['دخول مباشر للشاطئ الخاص', 'حمام سباحة إنفنيتي خاص', 'جراج خاص وغرفة للسائق'],
        image: C_NORTH_IMAGES.standalone
      }
    ],
    masterPlanImage: C_NORTH_IMAGES.main,
    brochurePages: C_NORTH_IMAGES.gallery
  },
  {
    id: 'creek-town',
    name: 'Creek Town',
    nameAr: 'كريك تاون',
    slug: 'creek-town',
    category: 'RESIDENTIAL',
    categoryAr: 'سكني متكامل راقٍ',
    location: 'First Settlement, New Cairo (Directly on Suez Road)',
    locationAr: 'التجمع الأول، القاهرة الجديدة (مباشرة على طريق السويس)',
    region: 'Cairo',
    regionAr: 'القاهرة الجديدة',
    coordinates: {
      lat: 30.0450,
      lng: 31.4700
    },
    image: CREEK_TOWN_IMAGES.main,
    heroImage: CREEK_TOWN_IMAGES.hero,
    gallery: CREEK_TOWN_IMAGES.gallery,
    description: 'Creek Town is a premier 100-Feddan residential masterpiece in the heart of First Settlement, New Cairo. Directly fronting Suez Road and designed by the renowned YBA Architects (Yasser Al Beltagy), Creek Town integrates contemporary low-density residences around lush green courtyards, serene water streams, and world-class leisure facilities.',
    descriptionAr: 'كريك تاون هو كمبوند سكني متكامل يمتد على مساحة 100 فدان في قلب التجمع الأول بالقاهرة الجديدة. يقع مباشرة على طريق السويس وصممه الاستشاري الهندسي الشهير ياسر البلتاجي (YBA). يجمع المشروع بين الوحدات السكنية منخفضة الكثافة والمسطحات المائية المتدفقة والحدائق الخضراء الواسعة والمرافق الخدمية والترفيهية العالمية.',
    shortDescription: '100-Feddan prime residential haven directly on Suez Road with 80% dedicated to green parks & water features.',
    shortDescriptionAr: 'كمبوند سكني راقٍ على مساحة 100 فدان مباشرة على طريق السويس مع تخصيص 80% للحدائق والمسطحات المائية.',
    tagline: 'Refined Living Along Serene Waterways',
    taglineAr: 'حياة عصرية راقية بين أحضان الطبيعة والمسطحات المائية',
    landArea: '100 Feddans',
    landAreaAr: '100 فدان',
    footprint: '20% Built-Up / 80% Green Open Spaces',
    footprintAr: '20% مباني / 80% مساحات خضراء ومسطحات مائية',
    status: 'Under Construction',
    statusAr: 'قيد الإنشاء والتنفيذ',
    startingPrice: '14,500,000 EGP',
    startingPriceAr: '14,500,000 جنيه مصري',
    paymentPlan: '10% Down Payment, 7 Years Equal Installments',
    paymentPlanAr: '10% مقدم، وأقساط متساوية على 7 سنوات',
    deliveryDate: '2025 - 2026',
    deliveryDateAr: '2025 - 2026',
    highlights: [
      'Prime location directly on Suez Road opposite Yasser Rizk Axis',
      'Master plan by YBA Architects with only 20% footprint',
      'Central Commercial District (Creek District) with boutique retail & dining',
      'Two dynamic Clubhouses with sports courts, heated pools & spa',
      'Smart home integration & private underground parking'
    ],
    highlightsAr: [
      'موقع استراتيجي مباشر على طريق السويس أمام محور ياسر رزق',
      'مخطط عام من تصميم المهندس ياسر البلتاجي بنسبة بنائية 20% فقط',
      'منطقة تجارية وإدارية متكاملة (Creek District) تضم أرقى المطاعم والمتاجر',
      'اثنان من أرقى النوادي الصحية والرياضية مع حمامات سباحة دافئة وملاعب',
      'أنظمة منازل ذكية وجراجات تحت الأرض تحت كل مبنى'
    ],
    nearbyLandmarks: [
      { name: 'Cairo International Airport', nameAr: 'مطار القاهرة الدولي', distance: '5 Mins', distanceAr: '5 دقائق' },
      { name: 'Rehab City', nameAr: 'مدينة الرحاب', distance: '3 Mins', distanceAr: '3 دقائق' },
      { name: 'North 90th Street', nameAr: 'شارع التسعين الشمالي', distance: '7 Mins', distanceAr: '7 دقائق' },
      { name: 'New Administrative Capital', nameAr: 'العاصمة الإدارية الجديدة', distance: '15 Mins', distanceAr: '15 دقيقة' }
    ],
    aboutProject: {
      overview: 'Creek Town is a master-planned 100-Feddan residential enclave in the First Settlement, New Cairo. Positioned directly on the Suez Road, it combines contemporary architecture with lush green parks and a central serene waterway.',
      locationDetails: 'Strategically located directly on the Suez Road in the First Settlement, New Cairo, facing Yasser Rizk Axis and minutes from Cairo International Airport, Rehab City, and 90th Street.',
      masterPlanDetails: 'Designed by Yasser Al Beltagy Architects (YBA) over 100 Feddans with an 80% open landscape and water stream allocation, low-density layout, sports club, and commercial strip.',
      unitTypesDetails: 'Offers premium apartments (2-3 bedrooms), penthouses, townhouses, twin houses, and standalone villas starting from 14,500,000 EGP with 10% downpayment over 7 years.'
    },
    aboutProjectAr: {
      overview: 'كريك تاون هو مجتمع سكني راقٍ متكامل الخدمات يمتد على مساحة 100 فدان بالتجمع الأول بالقاهرة الجديدة، يجمع بين الفخامة المعمارية العصرية والمسطحات المائية الممتدة التي تحيط بكافة المباني السكنية.',
      locationDetails: 'يتميز بموقع استراتيجي مباشر على طريق السويس بالتجمع الأول، أمام محور ياسر رزق، وعلى بعد 5 دقائق من مطار القاهرة الدولي و3 دقائق من مدينة الرحاب وشارع التسعين.',
      masterPlanDetails: 'تم تخطيط المشروع بواسطة الاستشاري المعماري ياسر البلتاجي (YBA) بنسبة مباني لا تتجاوز 20% مع تخصيص 80% للبحيرات الصناعية والحدائق المفتوحة والممشى الرياضي ومول كريك ديستريكت التجاري.',
      unitTypesDetails: 'يشمل شققًا فاخرة (غرفتين و3 غرف)، بنتهاوس، تاون هاوس، وتوين هاوس وفيلات مستقلة بتشطيبات ممتازة، بأسعار تبدأ من 14,500,000 جنيه بمقدم 10% وأقساط على 7 سنوات.'
    },
    unitTypes: [
      {
        id: 'creek-apt-2bd',
        title: '2 Bedrooms Apartment',
        titleAr: 'شقة 2 غرفة نوم',
        sizeRange: '128 - 140 sqm',
        bedroomCount: '2 Bedrooms',
        bedroomCountAr: '2 غرفة نوم',
        startingPrice: '14,500,000 EGP',
        startingPriceAr: '14,500,000 جنيه مصري',
        features: ['Park View', 'Underground Parking', 'Master Suite with Dressing Room'],
        featuresAr: ['إطلالة على الحديقة المركزية', 'جراج تحت الأرض', 'غرفة ماستر مع دريسنج روم'],
        image: CREEK_TOWN_IMAGES.townhouse
      },
      {
        id: 'creek-apt-3bd',
        title: '3 Bedrooms Apartment',
        titleAr: 'شقة 3 غرف نوم',
        sizeRange: '165 - 195 sqm',
        bedroomCount: '3 Bedrooms',
        bedroomCountAr: '3 غرف نوم',
        startingPrice: '18,200,000 EGP',
        startingPriceAr: '18,200,000 جنيه مصري',
        features: ['Panoramic Corner Balcony', 'Maid Room with Bathroom', 'Central AC Provisions'],
        featuresAr: ['بلكونة ركنية بانورامية', 'غرفة للمربية مع حمام', 'تجهيزات تكييف مركزي'],
        image: CREEK_TOWN_IMAGES.townhouse
      },
      {
        id: 'creek-penthouse',
        title: 'Luxury Sky Penthouse',
        titleAr: 'بنتهاوس فاخر مع رووف',
        sizeRange: '215 - 240 sqm',
        bedroomCount: '4 Bedrooms',
        bedroomCountAr: '4 غرف نوم',
        startingPrice: '24,000,000 EGP',
        startingPriceAr: '24,000,000 جنيه مصري',
        features: ['Private Rooftop Terrace', 'Jacuzzi Provision', 'Unobstructed Waterway Views'],
        featuresAr: ['تراس رووف خاص مفتوح', 'تجهيزات جاكوزي خاص', 'إطلالة كاملة على القناة المائية'],
        image: CREEK_TOWN_IMAGES.townhouse
      },
      {
        id: 'creek-town-villa-185',
        title: 'Townhouse Villa (185)',
        titleAr: 'تاون هاوس فيلا (185 م²)',
        sizeRange: '185 sqm',
        bedroomCount: '3 Bedrooms + Penthouse',
        bedroomCountAr: '3 غرف نوم + بنتهاوس',
        startingPrice: '28,500,000 EGP',
        startingPriceAr: '28,500,000 جنيه مصري',
        features: ['Private Garden', 'Roof Lounge', '2 Covered Carports'],
        featuresAr: ['حديقة خاصة واسعة', 'رووف لاونج', 'جراج سيارتين مغطى'],
        image: CREEK_TOWN_IMAGES.apt3bd
      },
      {
        id: 'creek-town-villa-210',
        title: 'Corner Townhouse (210)',
        titleAr: 'تاون هاوس كورنر (210 م²)',
        sizeRange: '210 sqm',
        bedroomCount: '4 Bedrooms + Penthouse',
        bedroomCountAr: '4 غرف نوم + بنتهاوس',
        startingPrice: '32,000,000 EGP',
        startingPriceAr: '32,000,000 جنيه مصري',
        features: ['Expanded L-Shaped Garden', 'Private Terrace', 'Smart Home Kit'],
        featuresAr: ['حديقة كورنر واسعة على شكل حرف L', 'تراس خاص', 'نظام سمارت هوم'],
        image: CREEK_TOWN_IMAGES.duplex
      },
      {
        id: 'creek-prime-villa-5a',
        title: 'Standalone Prime Villa (Type 5A)',
        titleAr: 'فيلا برايم مستقلة (نموذج 5A)',
        sizeRange: '330 sqm',
        bedroomCount: '5 Bedrooms + Maid + Driver',
        bedroomCountAr: '5 غرف نوم + غرفة مربية + غرفة سائق',
        startingPrice: '48,000,000 EGP',
        startingPriceAr: '48,000,000 جنيه مصري',
        features: ['Private Infinity Pool', 'Extensive Landscaped Plot', 'Double Height Entrance Foyer'],
        featuresAr: ['حمام سباحة إنفنيتي خاص', 'مساحة أرض وحديقة شاسعة', 'مدخل بهو بأسقف مزدوجة الارتفاع'],
        image: CREEK_TOWN_IMAGES.apt2bd
      }
    ],
    masterPlanImage: CREEK_TOWN_IMAGES.main,
    brochurePages: CREEK_TOWN_IMAGES.gallery
  },
  {
    id: 'the-crest',
    name: 'The Crest',
    nameAr: 'ذا كريست التجمع الخامس',
    slug: 'the-crest',
    category: 'RESIDENTIAL',
    categoryAr: 'سكني فاخر متعدد الاستخدامات',
    location: 'South 90th Street & Middle Ring Road, New Cairo',
    locationAr: 'تقاطع شارع التسعين الجنوبي مع الدائري الأوسطي، التجمع الخامس',
    region: 'Cairo',
    regionAr: 'القاهرة الجديدة',
    coordinates: {
      lat: 29.9800,
      lng: 31.5200
    },
    image: THE_CREST_IMAGES.main,
    heroImage: THE_CREST_IMAGES.hero,
    gallery: THE_CREST_IMAGES.gallery,
    description: 'The Crest is IL CAZAR’s flagship mixed-use community spanning 158 Feddans at the prestigious intersection of South 90th Street and the Middle Ring Road. Designed in collaboration with master architect Raef Fahmi, The Crest blends sophisticated boutique apartment buildings with ultra-luxury townhouses and standalone villas surrounded by cascading green ravines and water promenades.',
    descriptionAr: 'ذا كريست هو مجتمع سكني فاخر يمتد على مساحة 158 فدانًا في أرقى مواقع التجمع الخامس بالقاهرة الجديدة عند تقاطع شارع التسعين الجنوبي مع الدائري الأوسطي. تم تصميمه بالتعاون مع الاستشاري العالمي رائف فهمي ليمزج بين الوحدات السكنية العصرية والفيلات الفاخرة المحاطة بالحدائق والمساحات المائية.',
    shortDescription: '158 Feddans of architectural excellence by Raef Fahmi at the intersection of South 90th & Middle Ring Road.',
    shortDescriptionAr: '158 فدانًا من الإبداع المعماري لرائف فهمي عند تقاطع شارع التسعين الجنوبي والدائري الأوسطي.',
    tagline: 'The Pinnacle of Architectural Grandeur',
    taglineAr: 'قمة الفخامة والإبداع المعماري في القاهرة الجديدة',
    landArea: '158 Feddans',
    landAreaAr: '158 فدان',
    footprint: '17% Built-Up / 83% Open Landscapes',
    footprintAr: '17% مباني / 83% مساحات خضراء ولاندسكيب',
    status: 'Launching Now',
    statusAr: 'متاح للتعاقد الفوري',
    startingPrice: '8,500,000 EGP',
    startingPriceAr: '8,500,000 جنيه مصري',
    paymentPlan: '5% Down Payment, 5% after 3 months, 7 Years Installments',
    paymentPlanAr: '5% مقدم، 5% بعد 3 شهور، وأقساط على 7 سنوات',
    deliveryDate: '2027',
    deliveryDateAr: '2027',
    highlights: [
      'Master architectural design by the visionary Raef Fahmi',
      'Strategic intersection of South 90th St & Middle Ring Road next to Hyde Park & MIDA',
      'Integrated commercial boulevard featuring international brands & fine dining',
      'Exclusive sports club with padel courts, Olympic pool, and wellness spa',
      'Low-density living with 83% open landscaped green space'
    ],
    highlightsAr: [
      'تصميم معماري فريد من إبداع المهندس الاستشاري رائف فهمي',
      'موقع استراتيجي عند تقاطع شارع التسعين الجنوبي مع الدائري الأوسطي بجوار هايد بارك',
      'ممشى تجاري متكامل يضم كبرى العلامات التجارية والمطاعم العالمية',
      'نادي رياضي واجتماعي حصري يضم ملاعب بادل وحمام سباحة أولمبي وسبا',
      'كثافة بنائية منخفضة للغاية مع تخصيص 83% للحدائق والمسطحات المائية'
    ],
    nearbyLandmarks: [
      { name: 'American University in Cairo (AUC)', nameAr: 'الجامعة الأمريكية بالقاهرة', distance: '8 Mins', distanceAr: '8 دقائق' },
      { name: 'New Administrative Capital', nameAr: 'العاصمة الإدارية الجديدة', distance: '5 Mins', distanceAr: '5 دقائق' },
      { name: 'Ain Sokhna Road', nameAr: 'طريق العين السخنة', distance: '4 Mins', distanceAr: '4 دقائق' }
    ],
    aboutProject: {
      overview: 'The Crest is IL CAZAR’s flagship mixed-use sanctuary in New Cairo, designed in collaboration with master architect Raef Fahmi. Spanning 158 Feddans, it integrates luxury residences with organic landscape parks.',
      locationDetails: 'Prime intersection of South 90th Street and the Middle Ring Road, directly adjacent to Hyde Park, MIDA, and 5 minutes from the New Administrative Capital.',
      masterPlanDetails: 'Master-planned over 158 Feddans with 17% built-up area and 83% dedicated to open green parks, water features, sports clubs, and international dining promenades.',
      unitTypesDetails: 'Comprises high-end 1 to 3-bedroom apartments, duplexes, townhouses, and standalone villas starting from 8,500,000 EGP with 5% downpayment over 7 years.'
    },
    aboutProjectAr: {
      overview: 'ذا كريست هو كمبوند سكني واستثماري متكامل يُعد أيقونة إل كازار في القاهرة الجديدة، تم تصميمه بالتعاون مع المهندس رائف فهمي ليوفر مجتمعًا هادئًا متناغمًا مع الطبيعة.',
      locationDetails: 'يقع في أميز نقطة بالتجمع الخامس عند التقاء شارع التسعين الجنوبي بالطريق الدائري الأوسطي، ملاصق لمشروع هايد بارك وعلى بعد دقائق من الجامعة الأمريكية ومحور بن زايد المؤدي للعاصمة الإدارية.',
      masterPlanDetails: 'يمتد على مساحة 158 فدانًا بنسبة مباني 17% فقط، وتتوزع باقي المساحة على حدائق مفتوحة وبحيرات ونادي رياضي ومنطقة تجارية راقية تقدم خدمات فندقية متكاملة.',
      unitTypesDetails: 'يحتوي على شقق سكنية (من غرفة إلى 3 غرف)، دوبلكس، تاون هاوس، وفيلات مستقلة فاخرة، بأسعار تبدأ من 8,500,000 جنيه بمقدم 5% وفترات سداد ميسرة على 7 سنوات.'
    },
    unitTypes: [
      {
        id: 'crest-1bd',
        title: '1 Bedroom Suite',
        titleAr: 'جناح سكني 1 غرفة نوم',
        sizeRange: '85 - 95 sqm',
        bedroomCount: '1 Bedroom',
        bedroomCountAr: '1 غرفة نوم',
        startingPrice: '8,500,000 EGP',
        startingPriceAr: '8,500,000 جنيه مصري',
        features: ['Garden View', 'Spacious Balcony', 'Underground Parking'],
        featuresAr: ['إطلالة على الحديقة', 'شرفة واسعة', 'جراج تحت الأرض'],
        image: THE_CREST_IMAGES.suite1bd
      },
      {
        id: 'crest-2bd',
        title: '2 Bedrooms Residence',
        titleAr: 'شقة فاخرة 2 غرفة نوم',
        sizeRange: '125 - 145 sqm',
        bedroomCount: '2 Bedrooms',
        bedroomCountAr: '2 غرفة نوم',
        startingPrice: '12,800,000 EGP',
        startingPriceAr: '12,800,000 جنيه مصري',
        features: ['Master Suite with Walk-in Closet', 'Terrace', 'Prime Orientation'],
        featuresAr: ['غرفة نوم ماستر مع غرفة ملابس', 'تراس واسع', 'واجهة بحرية مميزة'],
        image: THE_CREST_IMAGES.res2bd
      },
      {
        id: 'crest-3bd',
        title: '3 Bedrooms Residence',
        titleAr: 'شقة فاخرة 3 غرف نوم',
        sizeRange: '165 - 190 sqm',
        bedroomCount: '3 Bedrooms',
        bedroomCountAr: '3 غرف نوم',
        startingPrice: '16,500,000 EGP',
        startingPriceAr: '16,500,000 جنيه مصري',
        features: ['Corner Unit', 'Panoramic Lake Views', 'Maid Suite'],
        featuresAr: ['وحدة كورنر مميزة', 'إطلالة بانورامية على البحيرات', 'غرفة للمربية بحمام خاص'],
        image: THE_CREST_IMAGES.res3bd
      },
      {
        id: 'crest-townhouse',
        title: 'Signature Townhouse',
        titleAr: 'تاون هاوس مميز',
        sizeRange: '230 - 250 sqm',
        bedroomCount: '4 Bedrooms + Penthouse',
        bedroomCountAr: '4 غرف نوم + بنتهاوس',
        startingPrice: '26,500,000 EGP',
        startingPriceAr: '26,500,000 جنيه مصري',
        features: ['Private Landscaped Garden', 'Rooftop Lounge', 'Double Height Foyer'],
        featuresAr: ['حديقة خاصة منسقة', 'رووف لاونج خاص', 'مدخل بهو بأسقف مرتفعة'],
        image: THE_CREST_IMAGES.townhouse
      },
      {
        id: 'crest-sa-5a',
        title: 'Standalone Grand Villa',
        titleAr: 'فيلا مستقلة جراند',
        sizeRange: '310 - 380 sqm',
        bedroomCount: '5 Bedrooms + Maid & Driver',
        bedroomCountAr: '5 غرف نوم + غرفة مربية وسائق',
        startingPrice: '42,000,000 EGP',
        startingPriceAr: '42,000,000 جنيه مصري',
        features: ['Private Pool', 'Expansive Plot (450+ sqm)', 'Driver & Maid Quarters'],
        featuresAr: ['حمام سباحة خاص', 'مساحة أرض تتجاوز 450 م²', 'أجنحة خاصة للسائق والمربية'],
        image: THE_CREST_IMAGES.villa
      }
    ],
    masterPlanImage: THE_CREST_IMAGES.main,
    brochurePages: THE_CREST_IMAGES.gallery
  },
  {
    id: 'safia',
    name: 'Safia',
    nameAr: 'صافية رأس الحكمة',
    slug: 'safia',
    category: 'RESIDENTIAL',
    categoryAr: 'منتجع ساحلي فاخر',
    location: 'KM 185 Ras El Hekma, North Coast',
    locationAr: 'الكيلو 185 رأس الحكمة، الساحل الشمالي',
    region: 'North Coast',
    regionAr: 'الساحل الشمالي',
    coordinates: {
      lat: 31.1000,
      lng: 28.1200
    },
    image: SAFIA_CLEAN_IMAGES.main,
    heroImage: SAFIA_CLEAN_IMAGES.hero,
    gallery: SAFIA_CLEAN_IMAGES.gallery,
    description: 'SAFIA is IL CAZAR’s breathtaking coastal jewel in KM 185 Ras El Hekma, North Coast. Spanning 180 Feddans with natural land elevations rising up to 40 meters above sea level, SAFIA guarantees 100% panoramic sea views for all homes, encircled by 15 Feddans of swimmable crystal lagoons and five-star beachfront amenities.',
    descriptionAr: 'صافية هي درة مشاريع إل كازار في الكيلو 185 رأس الحكمة بالساحل الشمالي. يمتد المشروع على مساحة 180 فدانًا بمصاطب طبيعية متدرجة ترتفع حتى 40 مترًا عن سطح البحر، مما يضمن رؤية بانورامية كاملة للبحر الأبيض المتوسط لجميع الوحدات، مع 15 فدانًا من البحيرات الكريستالية الصالحة للسباحة ونادٍ شاطئي راقٍ.',
    shortDescription: '180 Feddans at KM 185 Ras El Hekma with 40-meter natural sea view elevations & 15 Feddans crystal lagoons.',
    shortDescriptionAr: '180 فدانًا في الكيلو 185 رأس الحكمة مع مصاطب بارتفاع 40 مترًا ورؤية كاملة للبحر وبحيرات كريستالية.',
    tagline: 'Elegance on the Mediterranean Terraces',
    taglineAr: 'فخامة ساحلية على مصاطب البحر المتوسط برأس الحكمة',
    landArea: '180 Feddans',
    landAreaAr: '180 فدان',
    footprint: '15% Built-Up / 85% Crystal Lagoons & Landscaping',
    footprintAr: '15% مباني / 85% بحيرات كريستالية ولاندسكيب',
    status: 'Launching Now',
    statusAr: 'متاح للحجز والتعاقد',
    startingPrice: '10,200,000 EGP',
    startingPriceAr: '10,200,000 جنيه مصري',
    paymentPlan: '5% Down Payment, 5% after 3 months, 8 Years Equal Installments',
    paymentPlanAr: '5% مقدم، 5% بعد 3 أشهر، وأقساط متساوية على 8 سنوات',
    deliveryDate: '2028',
    deliveryDateAr: '2028',
    highlights: [
      'Prime location at KM 185 Ras El Hekma next to Katameya Coast & Salt',
      'Natural terraced master plan rising up to 40 meters for 100% sea views',
      '15 Feddans of swimmable crystal lagoons throughout the project',
      'Boutique 5-star hotel, beachfront clubhouse & wellness center',
      'Full finishing on all chalets and villas'
    ],
    highlightsAr: [
      'موقع استراتيجي فريد في الكيلو 185 رأس الحكمة بجوار قطامية كوست ومشروع سولت',
      'مصاطب طبيعية متدرجة بارتفاع يصل إلى 40 مترًا لضمان رؤية البحر لجميع الوحدات',
      '15 فدانًا من البحيرات الكريستالية النقية الصالحة للسباحة داخل المشروع',
      'فندق بوتيك 5 نجوم، كلوب هاوس شاطئي ونادٍ صحي متكامل',
      'تشطيب كامل سوبر لوكس لكافة الشاليهات والفيلات'
    ],
    nearbyLandmarks: [
      { name: 'Fouka Road Exit', nameAr: 'طريق الفوكا', distance: '10 Mins', distanceAr: '10 دقائق' },
      { name: 'Alamein Airport', nameAr: 'مطار العلمين الدولي', distance: '35 Mins', distanceAr: '35 دقيقة' },
      { name: 'Sidi Abdel Rahman', nameAr: 'سيدي عبد الرحمن', distance: '25 Mins', distanceAr: '25 دقيقة' }
    ],
    aboutProject: {
      overview: 'SAFIA is IL CAZAR’s serene Mediterranean haven at KM 185 Ras El Hekma. Spanning 180 Feddans, SAFIA features elevated natural land terraces, crystal lagoons, and organic coastal architecture.',
      locationDetails: 'Located at KM 185 Ras El Hekma, North Coast, directly on the Alex-Matrouh Road, adjacent to Katameya Coast, Salt, and Mountain View Ras El Hekma.',
      masterPlanDetails: 'Designed across 180 Feddans with 40-meter elevated natural land contours guaranteeing 100% sea views for all units, 15 Feddans of swimmable crystal lagoons, and beach clubhouses.',
      unitTypesDetails: 'Features 1 to 3-bedroom sea chalets, townhouses, and standalone coastal villas starting from 10,200,000 EGP with 5% downpayment over 8 years.'
    },
    aboutProjectAr: {
      overview: 'صافية هو أحدث وأرقى المنتجعات الساحلية الفاخرة لشركة إل كازار في خليج رأس الحكمة بالساحل الشمالي، صُمم ليجسد أسمى معاني الاسترخاء والرفاهية المطلة على البحر مباشرة.',
      locationDetails: 'يقع المشروع في الكيلو 185 طريق الإسكندرية - مطروح الصحراوي برأس الحكمة، في موقع استراتيجي يجاور كبرى القرى الراقية مثل قطامية كوست وسولت وبالقرب من مخرج طريق الفوكا ومحور الضبعة.',
      masterPlanDetails: 'يمتد المنتجع على مساحة 180 فدانًا، وصُمم المخطط العام على مصاطب بارتفاعات تصل إلى 40 مترًا فوق سطح البحر، مع بحيرات كريستالية لاجونز صالحة للسباحة ومساحات لاندسكيب خضراء تشغل 85% من إجمالي المساحة.',
      unitTypesDetails: 'يشمل شاليهات بحرية كاملة التشطيب (من غرفة إلى 3 غرف)، تاون هاوس، وفيلات مستقلة بإطلالات مباشرة على الشاطئ بأسعار تبدأ من 10,200,000 جنيه وبنظام سداد ميسر بمقدم 5% وأقساط على 8 سنوات.'
    },
    unitTypes: [
      {
        id: 'safia-1bd',
        title: '1 Bedroom Chalet',
        titleAr: 'شاليه 1 غرفة نوم',
        sizeRange: '75 - 80 sqm',
        bedroomCount: '1 Bedroom',
        bedroomCountAr: '1 غرفة نوم',
        startingPrice: '10,200,000 EGP',
        startingPriceAr: '10,200,000 جنيه مصري',
        features: ['Fully Finished', 'Lagoon Access', 'Spacious Terrace'],
        featuresAr: ['تشطيب كامل سوبر لوكس', 'وصول مباشر للبحيرة', 'تراس بإطلالة رائعة'],
        image: SAFIA_CLEAN_IMAGES.gallery[0]
      },
      {
        id: 'safia-2bd',
        title: '2 Bedrooms Sea Chalet',
        titleAr: 'شاليه 2 غرفة نوم مطل على البحر',
        sizeRange: '110 - 125 sqm',
        bedroomCount: '2 Bedrooms',
        bedroomCountAr: '2 غرفة نوم',
        startingPrice: '13,500,000 EGP',
        startingPriceAr: '13,500,000 جنيه مصري',
        features: ['Direct Sea View', 'Fully Finished', 'Terrace with BBQ Spot'],
        featuresAr: ['إطلالة مباشرة على البحر', 'تشطيب كامل فاخر', 'تراس مع ركن شواء'],
        image: SAFIA_CLEAN_IMAGES.gallery[1]
      },
      {
        id: 'safia-3bd',
        title: '3 Bedrooms Sea Chalet',
        titleAr: 'شاليه 3 غرف نوم على البحر',
        sizeRange: '145 - 165 sqm',
        bedroomCount: '3 Bedrooms',
        bedroomCountAr: '3 غرف نوم',
        startingPrice: '17,800,000 EGP',
        startingPriceAr: '17,800,000 جنيه مصري',
        features: ['Panoramic Sea View', 'Corner Balcony', 'Maid Room'],
        featuresAr: ['إطلالة بانورامية على البحر', 'بلكونة كورنر واسعة', 'غرفة للمربية'],
        image: SAFIA_CLEAN_IMAGES.gallery[2]
      },
      {
        id: 'safia-townhouse-middle',
        title: 'Townhouse Middle',
        titleAr: 'تاون هاوس ميدل',
        sizeRange: '200 sqm',
        bedroomCount: '3 Bedrooms + Penthouse',
        bedroomCountAr: '3 غرف نوم + بنتهاوس',
        startingPrice: '25,000,000 EGP',
        startingPriceAr: '25,000,000 جنيه مصري',
        features: ['Private Garden', 'Roof Terrace', 'Lagoon Access'],
        featuresAr: ['حديقة خاصة', 'تراس رووف واسع', 'دخول مباشر للبحيرة'],
        image: SAFIA_CLEAN_IMAGES.gallery[3]
      },
      {
        id: 'safia-townhouse-corner',
        title: 'Townhouse Corner',
        titleAr: 'تاون هاوس كورنر',
        sizeRange: '220 sqm',
        bedroomCount: '4 Bedrooms + Penthouse',
        bedroomCountAr: '4 غرف نوم + بنتهاوس',
        startingPrice: '28,500,000 EGP',
        startingPriceAr: '28,500,000 جنيه مصري',
        features: ['Large Corner Garden', 'Sea & Lagoon Views', 'Maid Suite'],
        featuresAr: ['حديقة كورنر كبيرة', 'إطلالة على البحر واللاجون', 'غرفة للمربية مع حمام'],
        image: SAFIA_CLEAN_IMAGES.gallery[4]
      },
      {
        id: 'safia-standalone',
        title: 'Prime Standalone Villa',
        titleAr: 'فيلا برايم مستقلة',
        sizeRange: '280 - 350 sqm',
        bedroomCount: '5 Bedrooms + Maid & Driver',
        bedroomCountAr: '5 غرف نوم + غرفة مربية وسائق',
        startingPrice: '45,000,000 EGP',
        startingPriceAr: '45,000,000 جنيه مصري',
        features: ['Direct Beachfront', 'Private Infinity Pool', 'Elevated Sea Panorama'],
        featuresAr: ['على الشاطئ مباشرة', 'حمام سباحة إنفنيتي خاص', 'بانوراما بحرية على أعلى مصطبة'],
        image: SAFIA_CLEAN_IMAGES.gallery[0]
      }
    ],
    masterPlanImage: SAFIA_CLEAN_IMAGES.hero,
    brochurePages: SAFIA_CLEAN_IMAGES.gallery
  },
  {
    id: 'vea',
    name: 'VÉA',
    nameAr: 'فيا التجمع السادس',
    slug: 'vea',
    category: 'RESIDENTIAL',
    categoryAr: 'سكني فاخر متطور',
    location: '6th Settlement, New Cairo (Facing Golden Square)',
    locationAr: 'التجمع السادس، القاهرة الجديدة (أمام جولدن سكوير)',
    region: 'Cairo',
    regionAr: 'القاهرة الجديدة',
    coordinates: {
      lat: 29.9650,
      lng: 31.5500
    },
    image: VEA_IMAGES.main,
    heroImage: VEA_IMAGES.hero,
    gallery: VEA_IMAGES.gallery,
    description: 'VÉA is IL CAZAR’s ultra-exclusive sanctuary in the 6th Settlement, New Cairo. Spanning 110 Feddans, VÉA features modern villa architecture with cascading crystal lakes and a 10-year flexible payment plan.',
    descriptionAr: 'فيا هو أحدث مشاريع إل كازار السكنية الفاخرة في التجمع السادس بالقاهرة الجديدة. يمتد الكمبوند على مساحة 110 أفدنة، ويتميز بتصميماته المعمارية العصرية الحديثة وبحيراته المائية الكريستالية ومساحاته الخضراء الواسعة مع أطول فترة سداد تصل إلى 10 سنوات.',
    shortDescription: '110 Feddans in 6th Settlement, New Cairo with 17% built-up area and 10-year installment plans.',
    shortDescriptionAr: '110 أفدنة بالتجمع السادس بنسبة مباني 17% وبحيرات مائية كريستالية وخطة سداد على 10 سنوات.',
    tagline: 'Sculpted for Future Elegance',
    taglineAr: 'صُمم ليرسم ملامح المستقبل والرفاهية',
    landArea: '110 Feddans',
    landAreaAr: '110 فدان',
    footprint: '17% Built-Up / 83% Lakes & Greenery',
    footprintAr: '17% مباني / 83% بحيرات ومساحات خضراء',
    status: 'New Launch',
    statusAr: 'طرح حصري جديد',
    startingPrice: '18,227,343 EGP',
    startingPriceAr: '18,227,343 جنيه مصري',
    paymentPlan: '5% Down Payment, 5% after 3 months, Up to 10 Years Installments',
    paymentPlanAr: '5% مقدم، 5% بعد 3 شهور، وأقساط تصل إلى 10 سنوات',
    deliveryDate: '2028',
    deliveryDateAr: '2028',
    highlights: [
      'Prime location in the 6th Settlement, New Cairo facing Golden Square',
      'Low density 17% footprint across 110 Feddans',
      'Exclusive Townhouses & Standalone Villas',
      'Cascading crystal water features & signature clubhouse',
      'Flexible payment terms up to 10 years'
    ],
    highlightsAr: [
      'موقع متميز بالتجمع السادس بالقاهرة الجديدة أمام جولدن سكوير',
      'كثافة بنائية منخفضة 17% على مساحة 110 أفدنة',
      'مجموعة حصرية من التاون هاوس والفيلات المستقلة',
      'بحيرات كريستالية متدفقة وكلوب هاوس متكامل',
      'أطول فترة سداد مرنة تصل حتى 10 سنوات'
    ],
    nearbyLandmarks: [
      { name: 'AUC Campus', nameAr: 'الجامعة الأمريكية', distance: '10 Mins', distanceAr: '10 دقائق' },
      { name: 'New Capital Entrance', nameAr: 'مدخل العاصمة الإدارية', distance: '12 Mins', distanceAr: '12 دقيقة' },
      { name: 'Middle Ring Road', nameAr: 'الطريق الدائري الأوسطي', distance: '4 Mins', distanceAr: '4 دقائق' }
    ],
    aboutProject: {
      overview: 'VEA is IL CAZAR’s ultra-exclusive residential enclave in New Cairo’s 6th Settlement. Spanning over 110 Feddans, VEA features bold modern architecture and cascading crystal lakes.',
      locationDetails: 'Prime District 6 Settlement, New Cairo, facing Golden Square and 10 minutes from AUC and New Capital City Center.',
      masterPlanDetails: '110 Feddans low-density master plan with 17% built-up footprint and 83% open green spaces, lakes, and state-of-the-art wellness clubhouses.',
      unitTypesDetails: 'Includes luxury townhouses (180 sqm) and standalone villas (220-300 sqm) starting from 18,227,343 EGP with flexible 10-year installment plans.'
    },
    aboutProjectAr: {
      overview: 'فيا هو مجتمع سكني فائق الفخامة من إل كازار في التجمع السادس بالقاهرة الجديدة، يمتد على مساحة 110 أفدنة بتصاميم معمارية بصرية حديثة وبحيرات مائية ساحرة.',
      locationDetails: 'يقع بموقع استراتيجي فريد في التجمع السادس بالقاهرة الجديدة، أمام المربع الذهبي (جولدن سكوير) وعلى بعد 10 دقائق من الجامعة الأمريكية والعاصمة الإدارية.',
      masterPlanDetails: 'مخطط عام على مساحة 110 أفدنة بنسبة بنائية 17% فقط و83% مساحات خضراء وبحيرات مائية صالحة للسباحة ونادٍ صحي رياضي متكامل.',
      unitTypesDetails: 'يتضمن تاون هاوس بمساحات من 180 م² وفيلات مستقلة من 220 م² بأسعار تبدأ من 18,227,343 جنيه مع خطة سداد مرنة تصل إلى 10 سنوات.'
    },
    unitTypes: [
      {
        id: 'vea-townhouse',
        title: 'Modern Townhouse',
        titleAr: 'تاون هاوس مودرن',
        sizeRange: '180 - 200 sqm',
        bedroomCount: '3 - 4 Bedrooms',
        bedroomCountAr: '3 - 4 غرف نوم',
        startingPrice: '18,227,343 EGP',
        startingPriceAr: '18,227,343 جنيه مصري',
        features: ['Private Garden', 'Rooftop Lounge', 'Lake Views'],
        featuresAr: ['حديقة خاصة', 'رووف لاونج', 'إطلالة على البحيرات'],
        image: VEA_IMAGES.townhouse
      },
      {
        id: 'vea-standalone-c',
        title: 'Standalone Villa (Type C)',
        titleAr: 'فيلا مستقلة (نموذج C)',
        sizeRange: '220 - 300 sqm',
        bedroomCount: '4 - 5 Bedrooms',
        bedroomCountAr: '4 - 5 غرف نوم',
        startingPrice: '27,500,000 EGP',
        startingPriceAr: '27,500,000 جنيه مصري',
        features: ['Private Pool Space', 'Grand Garden Plot', 'Driver & Maid Quarters'],
        featuresAr: ['مساحة لحمام سباحة خاص', 'حديقة واسعة', 'غرف للسائق والمربية'],
        image: VEA_IMAGES.villaC
      },
      {
        id: 'vea-signature-villa',
        title: 'Grand Signature Villa',
        titleAr: 'فيلا سيجنتشر الكبرى',
        sizeRange: '320 - 450 sqm',
        bedroomCount: '5 - 6 Bedrooms',
        bedroomCountAr: '5 - 6 غرف نوم',
        startingPrice: '38,000,000 EGP',
        startingPriceAr: '38,000,000 جنيه مصري',
        features: ['Direct Crystal Lake View', 'Private Infinity Pool', 'Elevator & Basement'],
        featuresAr: ['إطلالة مباشرة على البحيرة الكريستالية', 'حمام سباحة إنفينيتي خاص', 'مصعد وبدروم متكامل'],
        image: VEA_IMAGES.signatureVilla
      }
    ],
    masterPlanImage: VEA_IMAGES.main,
    brochurePages: VEA_IMAGES.gallery
  },
  {
    id: 'stoda',
    name: 'Stoda',
    nameAr: 'ستودا القاهرة الجديدة',
    slug: 'stoda',
    category: 'RESIDENTIAL',
    categoryAr: 'سكني وتجاري وإداري متكامل',
    location: 'Directly on Suez Road, First Settlement, New Cairo',
    locationAr: 'مباشرة على طريق السويس، التجمع الأول، القاهرة الجديدة',
    region: 'Cairo',
    regionAr: 'القاهرة الجديدة',
    coordinates: {
      lat: 30.0480,
      lng: 31.4750
    },
    image: STODA_IMAGES.main,
    heroImage: STODA_IMAGES.hero,
    gallery: STODA_IMAGES.gallery,
    description: 'Stoda is IL CAZAR’s signature 113-Feddan mixed-use master development along Suez Road, featuring luxury residential residences and modern commercial, administrative, and retail districts.',
    descriptionAr: 'ستودا هو مجتمع متكامل متعدد الاستخدامات (سكني وتجاري وإداري) يمتد على 113 فدانًا على طريق السويس مباشرة بالتجمع الأول، يجمع بين الشقق والدوبلكس السكني الفاخر والمكاتب الإدارية والمحلات والمطاعم العالمية.',
    shortDescription: '113 Feddans mixed-use residential & commercial landmark directly on Suez Road.',
    shortDescriptionAr: '113 فدانًا سكني وتجاري وإداري متكامل بموقع استراتيجي مباشر على طريق السويس.',
    tagline: 'Harmonious Living & Thriving Business',
    taglineAr: 'حياة راقية وبيئة أعمال متكاملة على طريق السويس',
    landArea: '113 Feddans',
    landAreaAr: '113 فدان',
    footprint: 'Mixed Residential & Commercial Masterplan',
    footprintAr: 'مخطط متكامل يجمع السكني والتجاري والإداري',
    status: 'Launching Now',
    statusAr: 'متاح للتعاقد والاستثمار',
    startingPrice: '8,900,000 EGP',
    startingPriceAr: '8,900,000 جنيه مصري',
    paymentPlan: '10% Down Payment, Up to 7 Years Installments',
    paymentPlanAr: '10% مقدم، وأقساط ميسرة حتى 7 سنوات',
    deliveryDate: '2027',
    deliveryDateAr: '2027',
    highlights: [
      'Direct frontage on Suez Road, First Settlement',
      'Dual offering: luxury residential apartments & premium commercial spaces',
      'Double-glazing insulated glass facades & smart automation',
      'Multi-level underground parking and 24/7 security gates'
    ],
    highlightsAr: [
      'واجهة رئيسية مباشرة على طريق السويس بالتجمع الأول',
      'طرح مزدوج: شقق ودوبلكس سكني فاخر ومساحات تجارية وإدارية عالمية',
      'واجهات زجاجية مزدوجة عازلة للصوت والحرارة مع أنظمة ذكية',
      'جراجات متعددة الطوابق تحت الأرض وبوابات أمنية على مدار الساعة'
    ],
    nearbyLandmarks: [
      { name: 'Cairo Airport', nameAr: 'مطار القاهرة الدولي', distance: '5 Mins', distanceAr: '5 دقائق' },
      { name: 'Ring Road', nameAr: 'الطريق الدائري', distance: '8 Mins', distanceAr: '8 دقائق' },
      { name: 'Rehab City', nameAr: 'مدينة الرحاب', distance: '4 Mins', distanceAr: '4 دقائق' }
    ],
    aboutProject: {
      overview: 'Stoda is IL CAZAR’s integrated mixed-use master development along Suez Road in New Cairo. Spanning 113 Feddans, Stoda combines luxury residential suites and penthouses with premier corporate offices and boutique retail promenades.',
      locationDetails: 'Directly on the Suez Road in First Settlement, New Cairo, offering unmatched visibility and direct 5-minute access to Cairo Airport and Ring Road.',
      masterPlanDetails: '113 Feddans master plan balancing residential serenity with a vibrant commercial boulevard, underground parking, and smart building management.',
      unitTypesDetails: 'Features residential apartments & duplexes starting from 8,900,000 EGP as well as commercial offices & retail shops starting from 12,500,000 EGP with flexible 7-year installment plans.'
    },
    aboutProjectAr: {
      overview: 'ستودا هو مجتمع متكامل يجمع بين السكن الفاخر ومقرات الأعمال الراقية من شركة إل كازار على طريق السويس، صُمم ليوفر أسلوب حياة عصري وبيئة استثمارية واعدة.',
      locationDetails: 'يتمتع بموقع استثنائي مباشر على طريق السويس بالتجمع الأول بالقاهرة الجديدة، على بعد 5 دقائق فقط من مطار القاهرة ومدينة الرحاب والطريق الدائري.',
      masterPlanDetails: 'يمتد المشروع على مساحة 113 فدانًا بمخطط هندسي ذكي يفصل بين الهدوء السكني وحيوية المنطقة التجارية والإدارية مع جراجات واسعة ومساحات خضراء.',
      unitTypesDetails: 'يوفر شققًا سكنية ودوبلكس بأسعار تبدأ من 8,900,000 جنيه، ومكاتب إدارية ومحلات تجارية بأسعار تبدأ من 12,500,000 جنيه بمقدم 10% وأقساط حتى 7 سنوات.'
    },
    unitTypes: [
      {
        id: 'stoda-res-apt',
        title: 'Luxury Residential Apartment (2-3 BD)',
        titleAr: 'شقة سكنية فاخرة (2-3 غرف نوم)',
        sizeRange: '115 - 165 sqm',
        bedroomCount: '2 - 3 Bedrooms',
        bedroomCountAr: '2 - 3 غرف نوم',
        startingPrice: '8,900,000 EGP',
        startingPriceAr: '8,900,000 جنيه مصري',
        features: ['Park & Garden Views', 'Spacious Balcony', 'Dedicated Underground Parking'],
        featuresAr: ['إطلالة على الحدائق', 'بلكونة واسعة', 'مكان مخصص بالجراج تحت الأرض'],
        image: STODA_IMAGES.apt
      },
      {
        id: 'stoda-res-duplex',
        title: 'Signature Sky Duplex',
        titleAr: 'دوبلكس سكني فاخر (سكاي دوبلكس)',
        sizeRange: '210 - 260 sqm',
        bedroomCount: '3 - 4 Bedrooms',
        bedroomCountAr: '3 - 4 غرف نوم',
        startingPrice: '14,500,000 EGP',
        startingPriceAr: '14,500,000 جنيه مصري',
        features: ['Double Height Living Area', 'Private Roof Terrace', 'Maid Suite'],
        featuresAr: ['ريسبشن بأسقف مزدوجة الارتفاع', 'تراس رووف خاص', 'غرفة للمربية بحمام'],
        image: STODA_IMAGES.duplex
      },
      {
        id: 'stoda-office',
        title: 'Executive Corporate Office',
        titleAr: 'مكتب إداري تنفيذي (تجاري / إداري)',
        sizeRange: '85 - 200 sqm',
        startingPrice: '12,500,000 EGP',
        startingPriceAr: '12,500,000 جنيه مصري',
        features: ['Double Glazed Facade', 'Central Air & Fire Safety', 'Underground Parking'],
        featuresAr: ['واجهات زجاجية عازلة', 'تكييف مركزي وأنظمة إطفاء ذكية', 'جراج مخصص تحت الأرض'],
        image: STODA_IMAGES.office
      },
      {
        id: 'stoda-retail',
        title: 'Ground Floor Retail / F&B Promenade',
        titleAr: 'محل تجاري / مطعم وكافيه بالدور الأرضي',
        sizeRange: '110 - 250 sqm',
        startingPrice: '22,000,000 EGP',
        startingPriceAr: '22,000,000 جنيه مصري',
        features: ['Outdoor Plaza Seating', 'Direct Suez Road Visibility', 'High Footfall Hub'],
        featuresAr: ['مساحة خارجية مفتوحة بالبلازا', 'رؤية مباشرة من طريق السويس', 'منطقة ذات كثافة رواد عالية'],
        image: STODA_IMAGES.retail
      },
      {
        id: 'stoda-clinics',
        title: 'Medical & Healthcare Suite',
        titleAr: 'عيادة ومقر طبي متخصص',
        sizeRange: '65 - 120 sqm',
        startingPrice: '9,200,000 EGP',
        startingPriceAr: '9,200,000 جنيه مصري',
        features: ['Medical Grade MEP', 'Patient Elevator', 'Reception Area'],
        featuresAr: ['تجهيزات كهروميكانيكية طبية', 'مصاعد خاصة للمرضى', 'استقبال وانتظار مجهز'],
        image: STODA_IMAGES.clinic
      }
    ],
    masterPlanImage: STODA_IMAGES.main,
    brochurePages: STODA_IMAGES.gallery
  },
  {
    id: 'westdays',
    name: 'Westdays',
    nameAr: 'ويست دايز 6 أكتوبر',
    slug: 'westdays',
    category: 'RESIDENTIAL',
    categoryAr: 'سكني عصري فاخر',
    location: '6th of October City (Near Juhayna Sq.)',
    locationAr: 'مدينة 6 أكتوبر (بالقرب من ميدان جهينة)',
    region: 'Cairo',
    regionAr: 'غرب القاهرة',
    coordinates: {
      lat: 29.9800,
      lng: 30.9500
    },
    image: WESTDAYS_IMAGES.main,
    heroImage: WESTDAYS_IMAGES.hero,
    gallery: WESTDAYS_IMAGES.gallery,
    description: 'Westdays is IL CAZAR’s modern residential development in 6th of October City, delivering upscale suburban living with private green parks and contemporary design.',
    descriptionAr: 'ويست دايز هو كمبوند سكني عصري من إل كازار بمدينة 6 أكتوبر، يضمن أسلوب حياة هادئ ومجتمعًا راقيًا محاطًا بالحدائق والتصاميم الهندسية المبتكرة.',
    shortDescription: 'Modern residential haven in 6th of October City with spacious gardens and low-density buildings.',
    shortDescriptionAr: 'مجتمع سكني حديث في 6 أكتوبر يتميز بالمساحات الخضراء والهدوء التام.',
    tagline: 'Modern Living Redefined in West Cairo',
    taglineAr: 'إعادة تعريف الحياة العصرية في غرب القاهرة',
    landArea: '50 Feddans',
    landAreaAr: '50 فدان',
    footprint: '18% Built-Up / 82% Landscape',
    footprintAr: '18% مباني / 82% لاندسكيب',
    status: 'Launching Now',
    statusAr: 'متاح للحجز والتعاقد',
    startingPrice: '6,200,000 EGP',
    startingPriceAr: '6,200,000 جنيه مصري',
    paymentPlan: '5% Down Payment, Up to 8 Years Installments',
    paymentPlanAr: '5% مقدم، وأقساط حتى 8 سنوات',
    deliveryDate: '2027',
    deliveryDateAr: '2027',
    highlights: [
      'Strategic location in 6th of October City near Mall of Arabia',
      'Lush park landscaping with central swimming pools',
      'Modern security, clubhouse, and underground parking'
    ],
    highlightsAr: [
      'موقع استراتيجي بمدينة 6 أكتوبر بالقرب من مول العرب وميدان جهينة',
      'حدائق واسعة وحمامات سباحة ومسارات مشي وركوب دراجات',
      'أمن وحراسة 24 ساعة وكلوب هاوس وجراجات تحت الأرض'
    ],
    nearbyLandmarks: [
      { name: 'Mall of Arabia', nameAr: 'مول العرب', distance: '5 Mins', distanceAr: '5 دقائق' },
      { name: 'Juhayna Square', nameAr: 'ميدان جهينة', distance: '7 Mins', distanceAr: '7 دقائق' }
    ],
    aboutProject: {
      overview: 'Westdays is IL CAZAR’s modern residential development in 6th of October City, delivering upscale suburban living with private green parks and contemporary design.',
      locationDetails: 'Strategically situated in 6th of October City near Juhayna Square, Mall of Arabia, and the 26th of July Corridor.',
      masterPlanDetails: 'Master-planned for optimal privacy with low-rise buildings, underground parking, central swimming pools, and sports facilities.',
      unitTypesDetails: 'Offers 1 to 3-bedroom modern apartments and garden duplexes starting from 75 sqm with prices starting from 6,200,000 EGP.'
    },
    aboutProjectAr: {
      overview: 'ويست دايز هو الكمبوند السكني العصري من إل كازار بمدينة 6 أكتوبر، يضمن أسلوب حياة هادئ ومجتمعًا راقيًا محاطًا بالحدائق والتصاميم الحديثة.',
      locationDetails: 'يتميز بموقع استراتيجي بمدينة 6 أكتوبر بالقرب من ميدان جهينة، مول العرب، ومحور 26 يوليو.',
      masterPlanDetails: 'مخطط عام يوفر أقصى درجات الخصوصية مع مبانٍ منخفضة الارتفاع وجراجات تحت الأرض وحمامات سباحة وملاعب رياضية.',
      unitTypesDetails: 'يوفر شققًا عصرية من غرفة إلى 3 غرف ودوبلكس بحديقة بمساحات تبدأ من 75 م² وأسعار تبدأ من 6,200,000 جنيه.'
    },
    unitTypes: [
      {
        id: 'westdays-1bd',
        title: '1 Bedroom Modern Flat',
        titleAr: 'شقة عصرية 1 غرفة نوم',
        sizeRange: '75 - 85 sqm',
        startingPrice: '6,200,000 EGP',
        startingPriceAr: '6,200,000 جنيه مصري',
        features: ['Garden View', 'Spacious Terrace'],
        featuresAr: ['إطلالة على الحديقة', 'تراس واسع'],
        image: WESTDAYS_IMAGES.office
      },
      {
        id: 'westdays-2bd',
        title: '2 Bedrooms Apartment',
        titleAr: 'شقة 2 غرفة نوم',
        sizeRange: '115 - 130 sqm',
        startingPrice: '9,500,000 EGP',
        startingPriceAr: '9,500,000 جنيه مصري',
        features: ['Master Bedroom', 'Balcony', 'Covered Parking'],
        featuresAr: ['غرفة نوم ماستر', 'بلكونة', 'موقف سيارات مغطى'],
        image: WESTDAYS_IMAGES.retail
      },
      {
        id: 'westdays-3bd',
        title: '3 Bedrooms Residence',
        titleAr: 'شقة فاخرة 3 غرف نوم',
        sizeRange: '155 - 180 sqm',
        startingPrice: '13,200,000 EGP',
        startingPriceAr: '13,200,000 جنيه مصري',
        features: ['Corner Unit', 'Open Landscape View', 'Maid Suite'],
        featuresAr: ['وحدة كورنر', 'إطلالة مفتوحة على المساحات الخضراء', 'غرفة مربية'],
        image: WESTDAYS_IMAGES.plaza
      }
    ],
    masterPlanImage: WESTDAYS_IMAGES.main,
    brochurePages: WESTDAYS_IMAGES.gallery
  },
  {
    id: 'glen',
    name: 'The Glen',
    nameAr: 'ذا جلين القاهرة الجديدة',
    slug: 'glen',
    category: 'RESIDENTIAL',
    categoryAr: 'سكني فاخر هادئ',
    location: 'New Cairo, Middle Ring Road',
    locationAr: 'القاهرة الجديدة، الطريق الدائري الأوسطي',
    region: 'Cairo',
    regionAr: 'القاهرة الجديدة',
    coordinates: {
      lat: 29.9700,
      lng: 31.5400
    },
    image: GLEN_IMAGES.main,
    heroImage: GLEN_IMAGES.hero,
    gallery: GLEN_IMAGES.gallery,
    description: 'The Glen is a boutique residential sanctuary in New Cairo, tailored for private family living with lush greenery and low-density architecture.',
    descriptionAr: 'ذا جلين هو مجتمع سكني هادئ وراقٍ في القاهرة الجديدة، صُمم خصيصًا لتوفير أقصى درجات الخصوصية والراحة للعائلات مع مساحات خضراء واسعة.',
    shortDescription: 'Boutique low-density community in New Cairo with 80% open parks & serene landscape.',
    shortDescriptionAr: 'كمبوند بوتيك راقٍ منخفض الكثافة بالقاهرة الجديدة بنسبة 80% مساحات خضراء مفتوحة.',
    tagline: 'Private Living in Nature’s Embrace',
    taglineAr: 'حياة هادئة وخاصة بين أحضان الطبيعة',
    landArea: '45 Feddans',
    landAreaAr: '45 فدان',
    footprint: '20% Built-Up / 80% Landscape',
    footprintAr: '20% مباني / 80% مساحات خضراء',
    status: 'Selling Fast',
    statusAr: 'إقبال واسع للحجز',
    startingPrice: '9,800,000 EGP',
    startingPriceAr: '9,800,000 جنيه مصري',
    paymentPlan: '10% Down Payment, 7 Years Installments',
    paymentPlanAr: '10% مقدم، وأقساط على 7 سنوات',
    deliveryDate: '2026',
    deliveryDateAr: '2026',
    highlights: [
      'Boutique low-density layout in New Cairo',
      'Walking & cycling green trails',
      'Clubhouse with gym, pool & kids park'
    ],
    highlightsAr: [
      'تخطيط بوتيك منخفض الكثافة بالقاهرة الجديدة',
      'مسارات مشي وركوب دراجات بين الحدائق',
      'كلوب هاوس ونادٍ رياضي وحمام سباحة ومنطقة ألعاب أطفال'
    ],
    nearbyLandmarks: [
      { name: 'AUC Campus', nameAr: 'الجامعة الأمريكية', distance: '10 Mins', distanceAr: '10 دقائق' },
      { name: 'Middle Ring Road', nameAr: 'الدائري الأوسطي', distance: '3 Mins', distanceAr: '3 دقائق' }
    ],
    aboutProject: {
      overview: 'The Glen is a boutique residential sanctuary in New Cairo, tailored for private family living with lush greenery and low-density architecture.',
      locationDetails: 'Prime New Cairo location close to Middle Ring Road, AUC, and main commercial hubs.',
      masterPlanDetails: 'Designed over 45 Feddans with 80% open parks, walking trails, and private security systems.',
      unitTypesDetails: 'Includes 2 and 3-bedroom luxury apartments and penthouses starting from 110 sqm with prices starting from 9,800,000 EGP.'
    },
    aboutProjectAr: {
      overview: 'ذا جلين هو مجتمع سكني هادئ ومميز في القاهرة الجديدة، مصمم للعائلات الباحثة عن الخصوصية والمساحات الخضراء والتصميم المعماري الرفيع.',
      locationDetails: 'موقع متميز بالقاهرة الجديدة بالقرب من الطريق الدائري الأوسطي والجامعة الأمريكية والمناطق الخدمية.',
      masterPlanDetails: 'تم تصميمه على مساحة 45 فدانًا بنسبة 80% مساحات خضراء ومسارات مشي وأنظمة أمن وحراسة 24 ساعة.',
      unitTypesDetails: 'يشمل شققًا فاخرة (2-3 غرف) وبنتهاوس بمساحات تبدأ من 110 م² وبأسعار تبدأ من 9,800,000 جنيه.'
    },
    unitTypes: [
      {
        id: 'glen-2bd',
        title: '2 Bedrooms Apartment',
        titleAr: 'شقة 2 غرفة نوم',
        sizeRange: '110 - 130 sqm',
        startingPrice: '9,800,000 EGP',
        startingPriceAr: '9,800,000 جنيه مصري',
        features: ['Park View', 'Balcony', 'Covered Parking'],
        featuresAr: ['إطلالة على الحديقة', 'بلكونة واسعة', 'جراج مغطى'],
        image: GLEN_IMAGES.apt2bd
      },
      {
        id: 'glen-3bd',
        title: '3 Bedrooms Apartment',
        titleAr: 'شقة 3 غرف نوم',
        sizeRange: '150 - 175 sqm',
        startingPrice: '13,500,000 EGP',
        startingPriceAr: '13,500,000 جنيه مصري',
        features: ['Corner Unit', 'Open Landscape View', 'Maid Suite'],
        featuresAr: ['وحدة كورنر', 'إطلالة مفتوحة على المساحات الخضراء', 'غرفة للمربية بحمام'],
        image: GLEN_IMAGES.apt3bd
      },
      {
        id: 'glen-3bd-penthouse',
        title: '3 Bedrooms Sky Penthouse',
        titleAr: 'بنتهاوس 3 غرف نوم مع رووف',
        sizeRange: '200 - 220 sqm',
        startingPrice: '18,500,000 EGP',
        startingPriceAr: '18,500,000 جنيه مصري',
        features: ['Private Rooftop Terrace', 'Panoramic Community View'],
        featuresAr: ['تراس رووف خاص', 'إطلالة بانورامية على الكمبوند'],
        image: GLEN_IMAGES.penthouse
      }
    ],
    masterPlanImage: GLEN_IMAGES.main,
    brochurePages: GLEN_IMAGES.gallery
  },
  {
    id: 'go-heliopolis',
    name: 'Go Heliopolis',
    nameAr: 'جو هليوبوليس مصر الجديدة',
    slug: 'go-heliopolis',
    category: 'RESIDENTIAL',
    categoryAr: 'سكني وتجاري متكامل',
    location: 'Heliopolis, Cairo (Near Nozha St & City Stars)',
    locationAr: 'مصر الجديدة، القاهرة (بالقرب من شارع النزهة وسيتي ستارز)',
    region: 'Cairo',
    regionAr: 'القاهرة',
    coordinates: {
      lat: 30.0900,
      lng: 31.3400
    },
    image: GO_HELIOPOLIS_IMAGES.main,
    heroImage: GO_HELIOPOLIS_IMAGES.hero,
    gallery: GO_HELIOPOLIS_IMAGES.gallery,
    description: 'Go Heliopolis is IL CAZAR’s iconic urban tower development in Heliopolis, Cairo, blending vibrant residential apartments with luxury commercial strip malls.',
    descriptionAr: 'جو هليوبوليس هو أحد أبرز مشاريع إل كازار في قلب مصر الجديدة، يمزج بين الوحدات السكنية العصرية والمول التجاري والمكاتب الإدارية.',
    shortDescription: 'Modern mixed-use urban landmark in the heart of Heliopolis with integrated commercial plaza.',
    shortDescriptionAr: 'مشروع سكني وتجاري متكامل في أرقى مناطق مصر الجديدة بالقرب من كافة المعالم الحيوية.',
    tagline: 'Urban Vitality in the Heart of Heliopolis',
    taglineAr: 'حياة عصرية نابضة بالحيوية في قلب مصر الجديدة',
    landArea: '18,000 sqm',
    landAreaAr: '18,000 م²',
    footprint: 'Residential & Commercial Mixed Complex',
    footprintAr: 'مجمع سكني وتجاري متكامل',
    status: 'Ready To Move (RTM)',
    statusAr: 'جاهز للاستلام الفوري',
    startingPrice: '7,500,000 EGP',
    startingPriceAr: '7,500,000 جنيه مصري',
    paymentPlan: '15% Down Payment, Up to 5 Years Installments',
    paymentPlanAr: '15% مقدم، وأقساط حتى 5 سنوات',
    deliveryDate: 'Ready To Move',
    deliveryDateAr: 'جاهز للتسليم الفوري',
    highlights: [
      'Prime location in Heliopolis near City Stars and Cairo Airport',
      'Subterranean private parking and 24/7 security gates',
      'Ground-floor commercial promenade with cafes & clinics'
    ],
    highlightsAr: [
      'موقع متميز في قلب مصر الجديدة بالقرب من سيتي ستارز ومطار القاهرة',
      'جراجات تحت الأرض وبوابات أمنية ذكية على مدار الساعة',
      'ممشى تجاري بالدور الأرضي يضم كبرى المطاعم والكافيهات والعيادات'
    ],
    nearbyLandmarks: [
      { name: 'City Stars Mall', nameAr: 'سيتي ستارز', distance: '6 Mins', distanceAr: '6 دقائق' },
      { name: 'Cairo International Airport', nameAr: 'مطار القاهرة الدولي', distance: '10 Mins', distanceAr: '10 دقائق' }
    ],
    aboutProject: {
      overview: 'Go Heliopolis is IL CAZAR’s iconic urban tower development in Heliopolis, Cairo, blending vibrant residential apartments with luxury commercial strip malls.',
      locationDetails: 'Located in the heart of Heliopolis near City Stars, Nozha Street, and Cairo International Airport.',
      masterPlanDetails: 'Integrated mixed-use complex with subterranean parking, sky gardens, fitness club, and commercial plaza.',
      unitTypesDetails: 'Comprises 1 to 3-bedroom residential units and commercial spaces starting from 70 sqm with prices starting from 7,500,000 EGP.'
    },
    aboutProjectAr: {
      overview: 'جو هليوبوليس هو أحد أبرز مشاريع إل كازار في قلب مصر الجديدة، يمزج بين الوحدات السكنية العصرية والمول التجاري والمكاتب الإدارية.',
      locationDetails: 'يقع بموقع حيوي في قلب مصر الجديدة بالقرب من سيتي ستارز، شارع النزهة، ومطار القاهرة الدولي.',
      masterPlanDetails: 'مجمع متكامل الخدمات بوابات إلكترونية وجراجات تحت الأرض وحدائق علوية ونادٍ صحي ومول تجاري.',
      unitTypesDetails: 'يوفر وحدات سكنية من غرفة إلى 3 غرف ومحلات تجارية بمساحات تبدأ من 70 م² وأسعار تبدأ من 7,500,000 جنيه.'
    },
    unitTypes: [
      {
        id: 'go-apt-1',
        title: '2 Bedrooms Modern Apartment',
        titleAr: 'شقة عصرية 2 غرفة نوم',
        sizeRange: '120 - 135 sqm',
        startingPrice: '7,500,000 EGP',
        startingPriceAr: '7,500,000 جنيه مصري',
        features: ['City View', 'Balcony', 'Dedicated Garage Spot'],
        featuresAr: ['إطلالة على المدينة', 'بلكونة', 'مكان مخصص بالجراج'],
        image: GO_HELIOPOLIS_IMAGES.apt
      },
      {
        id: 'go-comm-1',
        title: 'Commercial / Clinic Space',
        titleAr: 'وحدة تجارية / عيادة طبية',
        sizeRange: '70 - 150 sqm',
        startingPrice: '9,800,000 EGP',
        startingPriceAr: '9,800,000 جنيه مصري',
        features: ['High Footfall', 'Double Glazed Facade'],
        featuresAr: ['كثافة حركة عالية', 'واجهات زجاجية عازلة'],
        image: GO_HELIOPOLIS_IMAGES.comm
      }
    ],
    masterPlanImage: GO_HELIOPOLIS_IMAGES.main,
    brochurePages: GO_HELIOPOLIS_IMAGES.gallery
  },
  {
    id: 'parksight',
    name: 'Parksight',
    nameAr: 'بارك سايت القاهرة الجديدة',
    slug: 'parksight',
    category: 'RESIDENTIAL',
    categoryAr: 'سكني فاخر مطل على الحدائق',
    location: 'Golden Square, New Cairo',
    locationAr: 'المربع الذهبي (جولدن سكوير)، القاهرة الجديدة',
    region: 'Cairo',
    regionAr: 'القاهرة الجديدة',
    coordinates: {
      lat: 29.9900,
      lng: 31.5300
    },
    image: PARKSIGHT_IMAGES.main,
    heroImage: PARKSIGHT_IMAGES.hero,
    gallery: PARKSIGHT_IMAGES.gallery,
    description: 'Parksight is a boutique green residential community in New Cairo overlooking central expansive parks and natural water features.',
    descriptionAr: 'بارك سايت هو كمبوند سكني راقٍ في القاهرة الجديدة يطل مباشرة على حدائق مركزية مسطحة ومناظر طبيعية خلابة وبحيرات صناعية متلألئة.',
    shortDescription: 'Boutique green park community in Golden Square, New Cairo with 85% open landscape.',
    shortDescriptionAr: 'مجتمع سكني أخضر فاخر في الجولدن سكوير بنسبة 85% مساحات خضراء.',
    tagline: 'Parkside Living in Golden Square',
    taglineAr: 'حياة الرفاهية أمام الحدائق في الجولدن سكوير',
    landArea: '30 Feddans',
    landAreaAr: '30 فدان',
    footprint: '15% Built-Up / 85% Parks',
    footprintAr: '15% مباني / 85% حدائق',
    status: 'Selling Fast',
    statusAr: 'متاح للتعاقد',
    startingPrice: '11,000,000 EGP',
    startingPriceAr: '11,000,000 جنيه مصري',
    paymentPlan: '10% Down Payment, 7 Years Installments',
    paymentPlanAr: '10% مقدم، وأقساط على 7 سنوات',
    deliveryDate: '2027',
    deliveryDateAr: '2027',
    highlights: [
      'Prime Golden Square location in New Cairo',
      'Overlooking central grand park with lakes',
      'Private security & subterranean parking'
    ],
    highlightsAr: [
      'موقع استراتيجي في الجولدن سكوير بالتجمع الخامس',
      'إطلالات مباشرة على الحديقة المركزية والبحيرات',
      'حراسة خاصة وجراجات مغطاة تحت الأرض'
    ],
    nearbyLandmarks: [
      { name: 'AUC Campus', nameAr: 'الجامعة الأمريكية', distance: '7 Mins', distanceAr: '7 دقائق' },
      { name: 'South 90th Street', nameAr: 'شارع التسعين الجنوبي', distance: '5 Mins', distanceAr: '5 دقائق' }
    ],
    aboutProject: {
      overview: 'Parksight is a boutique green residential community in New Cairo overlooking central expansive parks and natural water features.',
      locationDetails: 'Located in New Cairo near Golden Square, AUC, and 90th Street.',
      masterPlanDetails: 'Low-density layout with 85% landscape coverage, private security, and underground parking.',
      unitTypesDetails: 'Offers 2 to 4-bedroom park apartments and garden villas starting from 120 sqm with prices starting from 11,000,000 EGP.'
    },
    aboutProjectAr: {
      overview: 'بارك سايت هو كمبوند سكني راقٍ في القاهرة الجديدة يطل مباشرة على حدائق مركزية مسطحة ومناظر طبيعية خلابة.',
      locationDetails: 'يقع في القاهرة الجديدة بالقرب من جولدن سكوير والجامعة الأمريكية وشارع التسعين الرئيسي.',
      masterPlanDetails: 'تخطيط منخفض الكثافة بنسبة 85% مساحات خضراء ولاندسكيب، مع حراسة وجراجات مغطاة.',
      unitTypesDetails: 'يوفر شققًا وفيلات مطلة على الحدائق (2-4 غرف) بمساحات تبدأ من 120 م² وأسعار تبدأ من 11,000,000 جنيه.'
    },
    unitTypes: [
      {
        id: 'park-villa',
        title: 'Park Villa',
        titleAr: 'بارك فيلا',
        sizeRange: '230 sqm',
        startingPrice: '22,000,000 EGP',
        startingPriceAr: '22,000,000 جنيه مصري',
        features: ['Direct Park Access', 'Private Garden'],
        featuresAr: ['دخول مباشر للحديقة', 'حديقة خاصة'],
        image: PARKSIGHT_IMAGES.villa
      },
      {
        id: 'park-apt',
        title: '2 Bedrooms Park Apartment',
        titleAr: 'شقة 2 غرفة نوم مطلة على الحديقة',
        sizeRange: '120 sqm',
        startingPrice: '11,000,000 EGP',
        startingPriceAr: '11,000,000 جنيه مصري',
        features: ['Park View', 'Balcony'],
        featuresAr: ['إطلالة على الحديقة', 'بلكونة واسعة'],
        image: PARKSIGHT_IMAGES.apt
      }
    ],
    masterPlanImage: PARKSIGHT_IMAGES.main,
    brochurePages: PARKSIGHT_IMAGES.gallery
  }
];

export const CONSTRUCTION_UPDATES: ConstructionUpdate[] = [
  {
    id: 'up-go-heliopolis',
    projectId: 'go-heliopolis',
    projectName: 'Go Heliopolis',
    projectNameAr: 'جو هليوبوليس',
    title: 'Ready to Move & Final Handover',
    titleAr: 'جاهز للاستلام والتسليم الفوري للوحدات',
    date: 'February 2026',
    quarter: 'Q1 2026',
    completionPercentage: 100,
    summary: 'Go Heliopolis has achieved 100% completion across all residential and commercial buildings. Infrastructure, facade lighting, subterranean parking, and retail boulevards are operational.',
    summaryAr: 'اكتمل مشروع جو هليوبوليس بنسبة 100% لجميع المباني السكنية والتجارية، مع تشغيل كامل للبنية التحتية والواجهات والجراجات والممشى التجاري.',
    coverImage: GO_HELIOPOLIS_IMAGES.main,
    images: [
      GO_HELIOPOLIS_IMAGES.gallery[0],
      GO_HELIOPOLIS_IMAGES.gallery[1],
      GO_HELIOPOLIS_IMAGES.gallery[4]
    ],
    details: [
      'Structural and MEP installations completed across 100% of buildings.',
      'Underground parking fully paved with automated security access gates.',
      'Landscaped public plazas and ground-floor commercial frontage activated.'
    ],
    detailsAr: [
      'اكتمال الأعمال الإنشائية والكهروميكانيكية بنسبة 100% لكافة المباني.',
      'تم رصف الجراجات تحت الأرض بالكامل مع بوابات إلكترونية ذكية.',
      'جاهزية الممشى التجاري والساحات الخارجية وبدء تشغيل الخدمات.'
    ]
  },
  {
    id: 'up-creek-town',
    projectId: 'creek-town',
    projectName: 'Creek Town',
    projectNameAr: 'كريك تاون',
    title: 'Phase 1 & 2 Concrete Skeleton & MEP Infrastructure',
    titleAr: 'الهيكل الخرساني والبنية التحتية للمرحلتين الأولى والثانية',
    date: 'January 2026',
    quarter: 'Q1 2026',
    completionPercentage: 72,
    summary: 'Concrete superstructure work for Phase 1 residential apartments and townhouses has reached 85% completion. Central waterway landscaping and excavation for the Clubhouse are well underway.',
    summaryAr: 'وصلت أعمال الهيكل الخرساني لشقق وتاون هاوس المرحلة الأولى إلى نسبة 85%، مع تقدم كبير في أعمال حفر القناة المائية والكلوب هاوس.',
    coverImage: CREEK_TOWN_IMAGES.main,
    images: [
      CREEK_TOWN_IMAGES.gallery[0],
      CREEK_TOWN_IMAGES.gallery[1]
    ],
    details: [
      'Apartment Zone A structural concrete poured up to 5th floor slab.',
      'Townhouse cluster 4 roofing and external brick masonry in progress.',
      'Deep excavation and foundational works for Creek District commercial zone on schedule.'
    ],
    detailsAr: [
      'صب الخرسانات المسلحة لمنطقة العمارات حتى سقف الدور الخامس.',
      'جاري استكمال أعمال البناء والأسقف لمجموعة فيلات التاون هاوس 4.',
      'تنفيذ أعمال الحفر والأساسات العميقة لمنطقة كريك ديستريكت التجارية وفق الجدول الزمني.'
    ]
  },
  {
    id: 'up-the-crest',
    projectId: 'the-crest',
    projectName: 'The Crest',
    projectNameAr: 'ذا كريست',
    title: 'Site Grading, Deep Excavation & Boundary Infrastructure',
    titleAr: 'تسوية الموقع وأعمال الحفر العميق والأسوار',
    date: 'December 2025',
    quarter: 'Q4 2025',
    completionPercentage: 28,
    summary: 'Heavy earthworks across the 158-Feddan plot are actively ongoing. Boundary retaining walls, main gate structural foundations, and road grading have commenced.',
    summaryAr: 'تجري أعمال الحفر والتسوية على كامل مساحة الـ 158 فدانًا مع بدء تنفيذ الأسوار الخارجية والبوابات الرئيسية وشبكات الطرق.',
    coverImage: THE_CREST_IMAGES.main,
    images: [
      THE_CREST_IMAGES.gallery[0],
      THE_CREST_IMAGES.gallery[1]
    ],
    details: [
      'Over 250,000 cubic meters of earthwork leveling completed.',
      'Foundational test pilings for Signature Townhouses verified.',
      'Temporary on-site batch plant established for rapid pouring.'
    ],
    detailsAr: [
      'تسوية ونقل أكثر من 250 ألف متر مكعب من التربة.',
      'اختبار الخوازيق والأساسات لمجموعة الفيلات المميزة بنجاح.',
      'إنشاء محطة خلط خرسانية بالموقع لتسريع وتيرة العمل.'
    ]
  },
  {
    id: 'up-safia',
    projectId: 'safia',
    projectName: 'Safia',
    projectNameAr: 'صافية رأس الحكمة',
    title: 'Terrace Grading & Crystal Lagoon Excavation',
    titleAr: 'تدريج المصاطب وحفر البحيرات الكريستالية',
    date: 'January 2026',
    quarter: 'Q1 2026',
    completionPercentage: 18,
    summary: 'Coastal terrace profiling for 40-meter sea view elevations is advancing rapidly in Ras El Hekma. Initial excavation for the 15-Feddan crystal lagoon network is in progress.',
    summaryAr: 'تتقدم أعمال نحت وتدريج المصاطب بارتفاع 40 مترًا في رأس الحكمة بسرعة كبيرة، مع بدء حفر شبكة البحيرات الكريستالية على مساحة 15 فدانًا.',
    coverImage: SAFIA_CLEAN_IMAGES.hero,
    images: [
      SAFIA_CLEAN_IMAGES.gallery[1],
      SAFIA_CLEAN_IMAGES.gallery[2]
    ],
    details: [
      'Coastal natural elevation contours 1 through 4 excavated and stabilized.',
      'Lagoon bed shaping and geo-textile liner preparation started.',
      'Sales pavilion and VIP preview experience center nearing completion.'
    ],
    detailsAr: [
      'تسوية وتثبيت المصاطب الطبيعية من 1 إلى 4 لضمان رؤية البحر.',
      'بدء تشكيل قاع البحيرات وتجهيز العوازل المائية الجيوتكستايل.',
      'قرب اكتمال مبنى المبيعات ومركز استقبال كبار الزوار بالموقع.'
    ]
  },
  {
    id: 'up-vea',
    projectId: 'vea',
    projectName: 'VÉA',
    projectNameAr: 'فيا',
    title: 'Site Preparation & Master Engineering Layout',
    titleAr: 'تجهيزات الموقع والمسح الهندسي الشامل',
    date: 'February 2026',
    quarter: 'Q1 2026',
    completionPercentage: 12,
    summary: 'Surveying and preliminary mobilization of heavy machinery on the 110-Feddan plot in the 6th Settlement have commenced following launch.',
    summaryAr: 'بدأت أعمال المسح الطبوغرافي ونقل المعدات الثقيلة لأرض المشروع بالتجمع السادس عقب إطلاق المشروع رسميًا.',
    coverImage: VEA_IMAGES.main,
    images: [
      VEA_IMAGES.gallery[0],
      VEA_IMAGES.gallery[1]
    ],
    details: [
      'Topographic surveying and geotechnical soil test borings finalized.',
      'Perimeter fencing and security checkpoints installed.',
      'Infrastructure trunk routing mapped with district authorities.'
    ],
    detailsAr: [
      'إنهاء المسح الطبوغرافي واختبارات جسات التربة الجيوتقنية.',
      'تركيب الأسوار المحيطة ونقاط الحراسة الأمنية للمشروع.',
      'تخطيط مسارات البنية التحتية الرئيسية بالتنسيق مع جهاز المدينة.'
    ]
  }
];

export const NEWS_ITEMS: NewsItem[] = [
  {
    id: 'news-beltone',
    title: 'IL CAZAR Secures 4 Billion EGP Securitization Bond with Beltone Financial',
    titleAr: 'إل كازار تنجح في إصدار سندات توريق بقيمة 4 مليارات جنيه بالتعاون مع بلتون المالية',
    category: 'Financial Milestone',
    categoryAr: 'إنجاز مالي',
    date: 'January 2026',
    summary: 'IL CAZAR has completed a landmark 4 Billion EGP securitization issuance backed by strong receivables from Creek Town and Go Heliopolis developments.',
    summaryAr: 'أتمت شركة إل كازار إصدار سندات توريق تاريخي بقيمة 4 مليارات جنيه مصري لتعزيز التدفقات النقدية وتسريع وتيرة الإنشاءات بمشاريعها.',
    content: 'Demonstrating solid financial strength and unwavering buyer confidence, IL CAZAR has successfully completed a multi-billion securitization bond issuance co-managed with Beltone Financial. The proceeds will directly accelerate delivery timelines across all ongoing developments in New Cairo and North Coast.',
    contentAr: 'تأكيدًا على القوة المالية للشركة وثقة العملاء، نجحت إل كازار في إتمام إصدار سندات توريق كبرى بالتعاون مع شركة بلتون المالية لتمويل وتسريع معدلات التنفيذ والتسليم في كافة مشاريعها بالقاهرة والساحل الشمالي.',
    image: THE_CREST_IMAGES.main,
    readTime: '3 min read'
  },
  {
    id: 'news-go-heliopolis',
    title: 'Go Heliopolis Celebrates Complete Delivery & Commercial Activation',
    titleAr: 'جو هليوبوليس يحتفل بالتسليم الكامل وبدء تشغيل المركز التجاري',
    category: 'Delivery Milestone',
    categoryAr: 'إنجاز التسليم',
    date: 'February 2026',
    summary: 'Owners receive their keys at Go Heliopolis as the prestigious mixed-use landmark in Heliopolis begins full commercial and residential operations.',
    summaryAr: 'بدء تسليم وحدات مشروع جو هليوبوليس للحاجزين وافتتاح المحلات التجارية والمطاعم لخدمة سكان مصر الجديدة.',
    content: 'IL CAZAR is proud to announce the commencement of key handovers for the landmark Go Heliopolis mixed-use complex. With fully finished commercial plazas and underground parking, the development stands as a testament to IL CAZAR’s commitment to on-time execution and pristine quality.',
    contentAr: 'يسر شركة إل كازار الإعلان عن بدء تسليم الوحدات السكنية والتجارية بمشروع جو هليوبوليس في قلب مصر الجديدة مع تشغيل كافة المرافق والجراجات والخدمات بأعلى مستويات الجودة.',
    image: GO_HELIOPOLIS_IMAGES.main,
    readTime: '2 min read'
  },
  {
    id: 'news-vea-launch',
    title: 'VÉA Unveiled in 6th Settlement: High Demand on New Villa Community',
    titleAr: 'إطلاق فيا التجمع السادس: إقبال استثنائي على أحدث مجتمع فيلات فاخر',
    category: 'Project Launch',
    categoryAr: 'طرح جديد',
    date: 'February 2026',
    summary: 'Over 1.8 Billion EGP in reservations recorded within 48 hours of launch as IL CAZAR introduces VÉA in New Cairo’s District 6.',
    summaryAr: 'تحقيق حجوزات بقيمة 1.8 مليار جنيه خلال 48 ساعة فقط من طرح مشروع فيا بالتجمع السادس بالقاهرة الجديدة.',
    content: 'IL CAZAR has officially launched VÉA, its signature 110-Feddan boutique villa haven in the 6th Settlement. Featuring a low-density 17% built-up area and crystal lakes, the project introduces a highly attractive 10-year payment plan.',
    contentAr: 'أطلقت شركة إل كازار مشروعها الجديد فيا على مساحة 110 أفدنة بالتجمع السادس، والذي يضم تشكيلة مميزة من التاون هاوس والفيلات المستقلة مع بحيرات مائية وبأطول فترة سداد تصل إلى 10 سنوات.',
    image: VEA_IMAGES.main,
    readTime: '3 min read'
  },
  {
    id: 'news-safia-ras-el-hekma',
    title: 'SAFIA Ras El Hekma Emerges as Premier Mediterranean Coastal Destination',
    titleAr: 'صافية رأس الحكمة تتصدر الوجهات الساحلية الأرقى على البحر المتوسط',
    category: 'Expansion',
    categoryAr: 'توسع استراتيجي',
    date: 'December 2025',
    summary: 'With its 40-meter elevated terraces and crystal lagoons at KM 185, SAFIA continues to set new benchmarks for coastal luxury in North Coast.',
    summaryAr: 'بمصاطبها المرتفعة 40 مترًا وبحيراتها الكريستالية في الكيلو 185، تواصل صافية وضع معايير جديدة للفخامة الساحلية.',
    content: 'SAFIA at KM 185 Ras El Hekma has captured the market’s attention with its innovative terraced architecture ensuring every homeowner enjoys uninterrupted panoramic Mediterranean vistas.',
    contentAr: 'حقق مشروع صافية في الكيلو 185 رأس الحكمة نجاحًا باهرًا بفضل تصميمه المبتكر على مصاطب متدرجة تضمن إطلالة مباشرة على البحر لكافة الوحدات مع بحيرات كريستالية لاجونز صالحة للسباحة.',
    image: SAFIA_CLEAN_IMAGES.main,
    readTime: '4 min read'
  },
  {
    id: 'news-land-acquisitions',
    title: 'IL CAZAR Expands Strategic Land Bank in East Cairo and North Coast',
    titleAr: 'إل كازار توسع محفظة أراضيها الاستراتيجية في شرق القاهرة والساحل الشمالي',
    category: 'Corporate Growth',
    categoryAr: 'نمو الشركة',
    date: 'November 2025',
    summary: 'New strategic land parcel acquisitions reinforce IL CAZAR’s pipeline for 2026-2030, targeting high-growth luxury destinations.',
    summaryAr: 'الاستحواذ على أراضٍ جديدة يعزز محفظة مشاريع إل كازار المستقبلية لتلبية الطلب المتزايد على المشاريع الراقية.',
    content: 'As part of its long-term vision to shape Egypt’s luxury real estate landscape, IL CAZAR has secured prime land holdings in strategic corridors across East Cairo and the Mediterranean coastline.',
    contentAr: 'في إطار رؤيتها الاستراتيجية طويلة الأجل، عززت شركة إل كازار محفظة أراضيها الاستثمارية بمواقع حيوية جديدة في شرق القاهرة والساحل الشمالي لإطلاق مشاريع عالمية المستوى.',
    image: STODA_IMAGES.main,
    readTime: '3 min read'
  }
];
