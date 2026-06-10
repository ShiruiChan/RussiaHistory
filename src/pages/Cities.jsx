import { cityIcons } from '../components/icons.jsx'
import ImageWithFallback from '../components/ImageWithFallback.jsx'

const cities = [
  {
    name: 'Москва',
    founded: '1147',
    text: 'Столица России, политический и культурный центр. Кремль и Красная площадь - символы страны и объекты ЮНЕСКО.',
    icon: 'kremlin',
    photo:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/0/01/Moscow_July_2011-16.jpg/960px-Moscow_July_2011-16.jpg',
  },
  {
    name: 'Санкт-Петербург',
    founded: '1703',
    text: 'Северная столица, основанная Петром I. Город дворцов, мостов и музеев, включая Эрмитаж.',
    icon: 'bridge',
    photo:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fd/Palace_Bridge_SPB_%28img2%29_Crop.jpg/960px-Palace_Bridge_SPB_%28img2%29_Crop.jpg',
  },
  {
    name: 'Великий Новгород',
    founded: '859',
    text: 'Один из древнейших городов, колыбель русской государственности и вечевой демократии.',
    icon: 'church',
    photo:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/8/86/Veliky_Novgorod_montage_%282015%29.png/960px-Veliky_Novgorod_montage_%282015%29.png',
  },
  {
    name: 'Казань',
    founded: '1005',
    text: 'Столица Татарстана, где веками соседствуют православие и ислам. Казанский кремль - объект ЮНЕСКО.',
    icon: 'mosque',
    photo:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/b/bd/%D0%94%D0%B2%D0%BE%D1%80%D0%B5%D1%86_%D0%B7%D0%B5%D0%BC%D0%BB%D0%B5%D0%B4%D0%B5%D0%BB%D1%8C%D1%86%D0%B5%D0%B22.jpg/960px-%D0%94%D0%B2%D0%BE%D1%80%D0%B5%D1%86_%D0%B7%D0%B5%D0%BC%D0%BB%D0%B5%D0%B4%D0%B5%D0%BB%D1%8C%D1%86%D0%B5%D0%B22.jpg',
  },
  {
    name: 'Владимир',
    founded: '990',
    text: 'Древняя столица Северо-Восточной Руси, входит в «Золотое кольцо». Знаменит белокаменными храмами.',
    icon: 'castle',
    photo:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f1/Vladimir_asv2019-01_img05_Golden_Gate.jpg/960px-Vladimir_asv2019-01_img05_Golden_Gate.jpg',
  },
  {
    name: 'Екатеринбург',
    founded: '1723',
    text: 'Крупнейший город Урала, индустриальный и культурный центр на границе Европы и Азии.',
    icon: 'mountain',
    photo:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/d/db/Yekaterinburg-overview-april-2015-russia-0001.jpg/960px-Yekaterinburg-overview-april-2015-russia-0001.jpg',
  },
  {
    name: 'Нижний Новгород',
    founded: '1221',
    text: 'Город на слиянии Волги и Оки, важный торговый и промышленный центр с величественным кремлём.',
    icon: 'ship',
    photo:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1c/Nizhny_Novgorod_2025-04-29_Minin_and_Pozharsky_square_01.jpg/960px-Nizhny_Novgorod_2025-04-29_Minin_and_Pozharsky_square_01.jpg',
  },
  {
    name: 'Владивосток',
    founded: '1860',
    text: 'Тихоокеанские ворота России, конечная точка Транссибирской магистрали и главный порт Дальнего Востока.',
    icon: 'anchor',
    photo:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c0/Views_of_Vladivostok_%28October_2024%29-0_3.jpg/960px-Views_of_Vladivostok_%28October_2024%29-0_3.jpg',
  },
  {
    name: 'Сочи',
    founded: '1838',
    text: 'Главный курорт страны на Чёрном море, столица зимних Олимпийских игр 2014 года.',
    icon: 'palm',
    photo:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Sochi_Marine_passenger_terminal_P5010102_2175.jpg/960px-Sochi_Marine_passenger_terminal_P5010102_2175.jpg',
  },
]

export default function Cities() {
  return (
    <>
      <section className="pagehead pagehead--cities">
        <div className="pagehead__glow" aria-hidden="true" />
        <div className="pagehead__inner">
          <span className="kicker">География истории</span>
          <h1>Великие города</h1>
          <p>
            От древних центров Руси до промышленных гигантов и тихоокеанских
            портов - города России хранят память о тысячелетней истории.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="cities">
          {cities.map((c) => {
            const Icon = cityIcons[c.icon]
            return (
              <article key={c.name} className="city" data-reveal>
                <div className="city__media">
                  <ImageWithFallback
                    src={c.photo}
                    alt={`${c.name} — вид города`}
                    className="city__img"
                  >
                    <span className="city__fallback" aria-hidden="true">
                      {Icon ? <Icon /> : null}
                    </span>
                  </ImageWithFallback>
                  <span className="city__chip">осн. {c.founded}</span>
                </div>
                <div className="city__body">
                  <div className="city__header">
                    <span className="city__mark" aria-hidden="true">
                      {Icon ? <Icon /> : null}
                    </span>
                    <h3>{c.name}</h3>
                  </div>
                  <p>{c.text}</p>
                </div>
              </article>
            )
          })}
        </div>
      </section>
    </>
  )
}
