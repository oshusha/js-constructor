import image from './assets/image.png'
import {TextBlock, TitleBlock, ColumnsBlock, ImageBlock} from './classes/blocks'

export const model = [
    new TitleBlock('Конструктор сайтов на чистом JavaScript', {
      tag: 'h2',
      styles: {
        background: 'linear-gradient(to right, #ff0099, #493240)',
        color: '#fff',
        padding: '1.5rem',
        'text-align': 'center'
      }
    }),

    new ColumnsBlock([
      'Проект на чистом JavaScript, без использования библиотек',
      'Основан на принципах SOLID и ООП',
      'Собран с помощью parcel'
    ], {
      styles: {
        background: 'linear-gradient(to bottom, #8e2de2, #4a00e0)',
        padding: '2rem',
        color: '#fff',
        'font-weight': 'bold'
      }
    }),

    new TextBlock('Другие мои проекты вы можете увидеть на моём <a href="github.com/oshusha" target="_blanc">GITHUB</a>', {
      styles: {
        background: 'linear-gradient(to left, #f2994a, #f2c94c)',
        margin: '0',
        padding: '1rem',
        'font-weight': 'bold'
      }
    }),

    new ImageBlock(image, {
      styles: {
        padding: '2rem 0',
        display: 'flex',
        'justify-content': 'center'
      },
      imageStyles: {
        width: '500px',
        height: 'auto'
      },
      alt: 'Это картинка'
    })
]
