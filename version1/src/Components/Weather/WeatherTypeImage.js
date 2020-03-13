import React, {Fragment,useState, useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';

import {WEATHER_TYPES,WeatherTypes} from '../../WeatherApi/Data';

const WeatherTypeImages = [
{'id': 1, 'image':'http://www.ipma.pt/bin/icons/svg/weather/w_ic_d_01.svg'},
{'id': 2, 'image':'http://www.ipma.pt/bin/icons/svg/weather/w_ic_d_02.svg'},
{'id': 3, 'image':'http://www.ipma.pt/bin/icons/svg/weather/w_ic_d_03.svg'},
{'id': 4, 'image':'http://www.ipma.pt/bin/icons/svg/weather/w_ic_d_04.svg'},
{'id': 5, 'image':'http://www.ipma.pt/bin/icons/svg/weather/w_ic_d_05.svg'},
{'id': 6, 'image':'http://www.ipma.pt/bin/icons/svg/weather/w_ic_d_06.svg'},
{'id': 7, 'image':'http://www.ipma.pt/bin/icons/svg/weather/w_ic_d_07.svg'},
{'id': 8, 'image':'http://www.ipma.pt/bin/icons/svg/weather/w_ic_d_08.svg'},
{'id': 9, 'image':'http://www.ipma.pt/bin/icons/svg/weather/w_ic_d_09.svg'},
{'id': 10, 'image':'http://www.ipma.pt/bin/icons/svg/weather/w_ic_d_10.svg'},

{'id': 11, 'image':'http://www.ipma.pt/bin/icons/svg/weather/w_ic_d_11.svg'},
{'id': 12, 'image':'http://www.ipma.pt/bin/icons/svg/weather/w_ic_d_12.svg'},
{'id': 13, 'image':'http://www.ipma.pt/bin/icons/svg/weather/w_ic_d_13.svg'},
{'id': 14, 'image':'http://www.ipma.pt/bin/icons/svg/weather/w_ic_d_14.svg'},
{'id': 15, 'image':'http://www.ipma.pt/bin/icons/svg/weather/w_ic_d_15.svg'},
{'id': 16, 'image':'http://www.ipma.pt/bin/icons/svg/weather/w_ic_d_16.svg'},
{'id': 17, 'image':'http://www.ipma.pt/bin/icons/svg/weather/w_ic_d_17.svg'},
{'id': 18, 'image':'http://www.ipma.pt/bin/icons/svg/weather/w_ic_d_18.svg'},
{'id': 19, 'image':'http://www.ipma.pt/bin/icons/svg/weather/w_ic_d_19.svg'},
{'id': 20, 'image':'http://www.ipma.pt/bin/icons/svg/weather/w_ic_d_20.svg'},

{'id': 21, 'image':'http://www.ipma.pt/bin/icons/svg/weather/w_ic_d_21.svg'},
{'id': 22, 'image':'http://www.ipma.pt/bin/icons/svg/weather/w_ic_d_22.svg'},
{'id': 23, 'image':'http://www.ipma.pt/bin/icons/svg/weather/w_ic_d_23.svg'},
{'id': 24, 'image':'http://www.ipma.pt/bin/icons/svg/weather/w_ic_d_24.svg'},
{'id': 25, 'image':'http://www.ipma.pt/bin/icons/svg/weather/w_ic_d_25.svg'},
{'id': 26, 'image':'http://www.ipma.pt/bin/icons/svg/weather/w_ic_d_26.svg'},
{'id': 27, 'image':'http://www.ipma.pt/bin/icons/svg/weather/w_ic_d_27.svg'}
]




const WeatherTypeImagesMap =  new Map(WeatherTypeImages.map(i => [i.id, i]));



const styes  = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    paddingBottom: '10px',
    textAlign: 'left'
  },
}));


const WeatherTypeImage = (props) => {
  //WeatherTypes.get()
  const {idWeatherType} = props
  const weatherType = (idWeatherType) ?  WeatherTypes.get(idWeatherType) : null
  const {descIdWeatherTypePT} =weatherType
  const image = WeatherTypeImagesMap.get(idWeatherType)

  return (
  <Fragment>
  {(image) ?  <img width="25px" src={image.image} alt={descIdWeatherTypePT}  title={descIdWeatherTypePT} /> : '' }
  </Fragment>
  )

}

export default WeatherTypeImage
