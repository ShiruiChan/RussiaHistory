import ImageWithFallback from '../components/ImageWithFallback.jsx'

const scientists = [
  {
    name: 'Михаил Ломоносов',
    years: '1711–1765',
    field: 'Энциклопедист, химия, физика',
    text: 'Основоположник российской науки, поэт и реформатор языка. Сформулировал закон сохранения вещества, основал Московский университет.',
    photo:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/2/23/Mikhail_Lomonosov_%281757%29.jpg/500px-Mikhail_Lomonosov_%281757%29.jpg',
  },
  {
    name: 'Дмитрий Менделеев',
    years: '1834–1907',
    field: 'Химия',
    text: 'Создал Периодическую систему химических элементов - один из фундаментов современной химии и науки в целом.',
    photo:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c8/DIMendeleevCab.jpg/500px-DIMendeleevCab.jpg',
  },
  {
    name: 'Иван Павлов',
    years: '1849–1936',
    field: 'Физиология',
    text: 'Первый российский нобелевский лауреат. Исследовал условные рефлексы и высшую нервную деятельность.',
    photo:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7d/Ivan_Pavlov_NLM3.jpg/500px-Ivan_Pavlov_NLM3.jpg',
  },
  {
    name: 'Софья Ковалевская',
    years: '1850–1891',
    field: 'Математика',
    text: 'Первая в мире женщина - профессор математики. Внесла вклад в теорию дифференциальных уравнений.',
    photo:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/8/80/Sofja_Wassiljewna_Kowalewskaja_1_%28Remini_enhanced%29.jpg/500px-Sofja_Wassiljewna_Kowalewskaja_1_%28Remini_enhanced%29.jpg',
  },
  {
    name: 'Константин Циолковский',
    years: '1857–1935',
    field: 'Космонавтика',
    text: 'Основоположник теоретической космонавтики. Вывел формулу движения ракеты и обосновал космические полёты.',
    photo:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a8/%D0%9A%D0%BE%D0%BD%D1%81%D1%82%D0%B0%D0%BD%D1%82%D0%B8%D0%BD_%D0%A6%D0%B8%D0%BE%D0%BB%D0%BA%D0%BE%D0%B2%D1%81%D0%BA%D0%B8%D0%B9.jpg/500px-%D0%9A%D0%BE%D0%BD%D1%81%D1%82%D0%B0%D0%BD%D1%82%D0%B8%D0%BD_%D0%A6%D0%B8%D0%BE%D0%BB%D0%BA%D0%BE%D0%B2%D1%81%D0%BA%D0%B8%D0%B9.jpg',
  },
  {
    name: 'Николай Вавилов',
    years: '1887–1943',
    field: 'Генетика, ботаника',
    text: 'Создал учение о центрах происхождения культурных растений и крупнейшую в мире коллекцию семян.',
    photo:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/b/bd/Nikolai_Vavilov_NYWTS.jpg/500px-Nikolai_Vavilov_NYWTS.jpg',
  },
  {
    name: 'Пётр Капица',
    years: '1894–1984',
    field: 'Физика',
    text: 'Нобелевский лауреат, исследователь сверхтекучести жидкого гелия и физики низких температур.',
    photo:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Pyotr_Kapitsa_1930s.jpg/500px-Pyotr_Kapitsa_1930s.jpg',
  },
  {
    name: 'Сергей Королёв',
    years: '1907–1966',
    field: 'Ракетостроение',
    text: 'Главный конструктор советской космической программы. Под его руководством запущены первый спутник и первый человек в космос.',
    photo:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/4/48/%D0%9D%D0%B8%D0%BD%D0%B0_%D0%B8_%D0%A1%D0%B5%D1%80%D0%B3%D0%B5%D0%B9_%D0%9A%D0%BE%D1%80%D0%BE%D0%BB%D0%B5%D0%B2%D1%8B_%28cropped%29.jpg/500px-%D0%9D%D0%B8%D0%BD%D0%B0_%D0%B8_%D0%A1%D0%B5%D1%80%D0%B3%D0%B5%D0%B9_%D0%9A%D0%BE%D1%80%D0%BE%D0%BB%D0%B5%D0%B2%D1%8B_%28cropped%29.jpg',
  },
  {
    name: 'Лев Ландау',
    years: '1908–1968',
    field: 'Теоретическая физика',
    text: 'Нобелевский лауреат, автор фундаментальных работ по квантовой механике и теории конденсированного состояния.',
    photo:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0b/Landau.jpg/500px-Landau.jpg',
  },
]

const initials = (name) =>
  name
    .split(' ')
    .map((w) => w[0])
    .join('')

export default function Scientists() {
  return (
    <>
      <section className="pagehead pagehead--science">
        <div className="pagehead__glow" aria-hidden="true" />
        <div className="pagehead__inner">
          <span className="kicker">Наука и открытия</span>
          <h1>Выдающиеся учёные</h1>
          <p>
            Российская наука подарила миру открытия в химии, физике, математике
            и космонавтике. Вот лишь некоторые из тех, кто изменил представление
            человечества о мире.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="cards">
          {scientists.map((s) => (
            <article key={s.name} className="card" data-reveal>
              <div className="card__avatar">
                <ImageWithFallback
                  src={s.photo}
                  alt={`Портрет: ${s.name}`}
                  className="card__photo"
                >
                  <span aria-hidden="true">{initials(s.name)}</span>
                </ImageWithFallback>
              </div>
              <div className="card__content">
                <h3>{s.name}</h3>
                <p className="card__meta">
                  {s.years} · {s.field}
                </p>
                <p>{s.text}</p>
              </div>
            </article>
          ))}
        </div>
      </section>
    </>
  )
}
