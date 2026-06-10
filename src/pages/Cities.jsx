import { cityIcons } from '../components/icons.jsx'

const cities = [
  {
    name: 'Москва',
    founded: '1147',
    text: 'Столица России, политический и культурный центр. Кремль и Красная площадь — символы страны и объекты ЮНЕСКО.',
    icon: 'kremlin',
  },
  {
    name: 'Санкт-Петербург',
    founded: '1703',
    text: 'Северная столица, основанная Петром I. Город дворцов, мостов и музеев, включая Эрмитаж.',
    icon: 'bridge',
  },
  {
    name: 'Великий Новгород',
    founded: '859',
    text: 'Один из древнейших городов, колыбель русской государственности и вечевой демократии.',
    icon: 'church',
  },
  {
    name: 'Казань',
    founded: '1005',
    text: 'Столица Татарстана, где веками соседствуют православие и ислам. Казанский кремль — объект ЮНЕСКО.',
    icon: 'mosque',
  },
  {
    name: 'Владимир',
    founded: '990',
    text: 'Древняя столица Северо-Восточной Руси, входит в «Золотое кольцо». Знаменит белокаменными храмами.',
    icon: 'castle',
  },
  {
    name: 'Екатеринбург',
    founded: '1723',
    text: 'Крупнейший город Урала, индустриальный и культурный центр на границе Европы и Азии.',
    icon: 'mountain',
  },
  {
    name: 'Нижний Новгород',
    founded: '1221',
    text: 'Город на слиянии Волги и Оки, важный торговый и промышленный центр с величественным кремлём.',
    icon: 'ship',
  },
  {
    name: 'Владивосток',
    founded: '1860',
    text: 'Тихоокеанские ворота России, конечная точка Транссибирской магистрали и главный порт Дальнего Востока.',
    icon: 'anchor',
  },
  {
    name: 'Сочи',
    founded: '1838',
    text: 'Главный курорт страны на Чёрном море, столица зимних Олимпийских игр 2014 года.',
    icon: 'palm',
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
            портов — города России хранят память о тысячелетней истории.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="cities">
          {cities.map((c) => {
            const Icon = cityIcons[c.icon]
            return (
              <article key={c.name} className="city" data-reveal>
                <div className="city__icon" aria-hidden="true">
                  {Icon ? <Icon /> : null}
                </div>
                <div className="city__body">
                  <div className="city__header">
                    <h3>{c.name}</h3>
                    <span className="city__year">осн. {c.founded}</span>
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
