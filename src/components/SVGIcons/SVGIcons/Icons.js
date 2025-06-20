import React from 'react';
import Svg, {ClipPath, Defs, G, Path, Rect} from 'react-native-svg';

export function Icons({type, color, size, width, height}) {
  switch (type) {
    case 'hamburger':
      return (
        <Svg
          width="24"
          height="18"
          viewBox="0 0 24 18"
          fill="none"
          xmlns="http://www.w3.org/2000/svg">
          <Path
            d="M1.5 3H22.5C22.8978 3 23.2794 2.84196 23.5607 2.56066C23.842 2.27936 24 1.89782 24 1.5C24 1.10218 23.842 0.720644 23.5607 0.43934C23.2794 0.158035 22.8978 0 22.5 0H1.5C1.10218 0 0.720644 0.158035 0.43934 0.43934C0.158035 0.720644 0 1.10218 0 1.5C0 1.89782 0.158035 2.27936 0.43934 2.56066C0.720644 2.84196 1.10218 3 1.5 3V3Z"
            fill={color}
          />
          <Path
            d="M1.5 8H14.5C14.8978 8 15.2794 7.84196 15.5607 7.56066C15.842 7.27936 16 6.89782 16 6.5C16 6.10218 15.842 5.72064 15.5607 5.43934C15.2794 5.15804 14.8978 5 14.5 5H1.5C1.10218 5 0.720644 5.15804 0.43934 5.43934C0.158035 5.72064 0 6.10218 0 6.5C0 6.89782 0.158035 7.27936 0.43934 7.56066C0.720644 7.84196 1.10218 8 1.5 8V8Z"
            fill={color}
          />
          <Path
            d="M14.5 15H1.5C1.10218 15 0.720644 15.158 0.43934 15.4393C0.158035 15.7206 0 16.1022 0 16.5C0 16.8978 0.158035 17.2794 0.43934 17.5607C0.720644 17.842 1.10218 18 1.5 18H14.5C14.8978 18 15.2794 17.842 15.5607 17.5607C15.842 17.2794 16 16.8978 16 16.5C16 16.1022 15.842 15.7206 15.5607 15.4393C15.2794 15.158 14.8978 15 14.5 15Z"
            fill={color}
          />
          <Path
            d="M22.5 10H1.5C1.10218 10 0.720644 10.158 0.43934 10.4393C0.158035 10.7206 0 11.1022 0 11.5C0 11.8978 0.158035 12.2794 0.43934 12.5607C0.720644 12.842 1.10218 13 1.5 13H22.5C22.8978 13 23.2794 12.842 23.5607 12.5607C23.842 12.2794 24 11.8978 24 11.5C24 11.1022 23.842 10.7206 23.5607 10.4393C23.2794 10.158 22.8978 10 22.5 10Z"
            fill={color}
          />
        </Svg>
      );
    case 'settings':
      return (
        <Svg
          width={width}
          height={height}
          viewBox="0 0 32 32"
          xmlns="http://www.w3.org/2000/svg">
          <G fill={color} class="fill-333333">
            <Path d="m30.391 12.68-3.064-.614a12.098 12.098 0 0 0-.537-1.289l1.736-2.604a1.999 1.999 0 0 0-.25-2.523l-1.924-1.924a1.996 1.996 0 0 0-2.523-.25l-2.604 1.735a12.09 12.09 0 0 0-1.291-.536L19.32 1.61A1.998 1.998 0 0 0 17.359.002h-2.72a2 2 0 0 0-1.961 1.608l-.614 3.065c-.443.154-.873.335-1.289.536L8.172 3.476a1.996 1.996 0 0 0-2.524.25L3.725 5.65a2 2 0 0 0-.25 2.523l1.735 2.604c-.202.417-.382.847-.536 1.29l-3.066.613A2 2 0 0 0 0 14.641v2.72a2 2 0 0 0 1.608 1.961l3.065.615c.154.443.335.873.536 1.289L3.475 23.83a1.999 1.999 0 0 0 .25 2.523l1.924 1.924a1.996 1.996 0 0 0 2.523.25l2.604-1.736c.417.203.847.383 1.29.537l.613 3.064a2 2 0 0 0 1.961 1.609h2.72a2 2 0 0 0 1.961-1.609l.615-3.064c.443-.154.873-.336 1.289-.537l2.604 1.736a1.998 1.998 0 0 0 2.523-.25l1.924-1.924a2 2 0 0 0 .25-2.523l-1.736-2.604c.203-.418.383-.848.537-1.291l3.064-.613A2 2 0 0 0 32 17.361v-2.72c0-.953-.674-1.774-1.609-1.961zm-3.457 5.295a1.997 1.997 0 0 0-1.496 1.305c-.129.369-.279.727-.447 1.074a1.996 1.996 0 0 0 .135 1.982l1.736 2.604-1.924 1.924-2.604-1.736a1.997 1.997 0 0 0-1.98-.137c-.348.168-.705.32-1.076.449a1.998 1.998 0 0 0-1.303 1.496l-.615 3.066h-2.72l-.613-3.066a1.997 1.997 0 0 0-1.304-1.496 10.17 10.17 0 0 1-1.075-.447 1.994 1.994 0 0 0-1.981.135l-2.604 1.736-1.924-1.924 1.735-2.604c.393-.59.444-1.344.137-1.98a10.106 10.106 0 0 1-.448-1.076 2 2 0 0 0-1.496-1.303l-3.065-.615L2 14.641l3.066-.613a1.999 1.999 0 0 0 1.496-1.304c.129-.369.278-.728.447-1.075a1.995 1.995 0 0 0-.136-1.981L5.139 7.064 7.062 5.14l2.604 1.735a1.997 1.997 0 0 0 1.98.137 10.09 10.09 0 0 1 1.075-.448 1.999 1.999 0 0 0 1.304-1.496l.614-3.065 2.72-.001.613 3.066a1.998 1.998 0 0 0 1.305 1.496c.369.129.727.278 1.074.447a1.998 1.998 0 0 0 1.982-.136l2.604-1.735 1.924 1.924-1.736 2.604a2.006 2.006 0 0 0-.137 1.98c.168.347.32.705.449 1.075a1.997 1.997 0 0 0 1.496 1.304l3.064.614.003 2.72-3.066.614z"></Path>
            <Path d="M16 9.001A7 7 0 1 0 16.001 23 7 7 0 0 0 16 9zm0 13.126a6.126 6.126 0 1 1 6.125-6.125A6.127 6.127 0 0 1 16 22.127z"></Path>
            <Path d="M16 12.001a4 4 0 1 0 0 8 4 4 0 0 0 0-8zm0 7.001a3.001 3.001 0 0 1 0-6 3.001 3.001 0 0 1 0 6z"></Path>
          </G>
        </Svg>
      );
    case 'plus':
      return (
        <Svg viewBox="0 0 448 512" fill={color} height={height} width={width}>
          <Path d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32v144H48c-17.7 0-32 14.3-32 32s14.3 32 32 32h144v144c0 17.7 14.3 32 32 32s32-14.3 32-32V288h144c17.7 0 32-14.3 32-32s-14.3-32-32-32H256V80z" />
        </Svg>
      );
    case 'stack':
      return (
        <Svg fill={color} viewBox="0 0 16 16" height={height} width={width}>
          <Path d="M14.12 10.163l1.715.858c.22.11.22.424 0 .534L8.267 15.34a.598.598 0 01-.534 0L.165 11.555a.299.299 0 010-.534l1.716-.858 5.317 2.659c.505.252 1.1.252 1.604 0l5.317-2.66zM7.733.063a.598.598 0 01.534 0l7.568 3.784a.3.3 0 010 .535L8.267 8.165a.598.598 0 01-.534 0L.165 4.382a.299.299 0 010-.535L7.733.063z" />
          <Path d="M14.12 6.576l1.715.858c.22.11.22.424 0 .534l-7.568 3.784a.598.598 0 01-.534 0L.165 7.968a.299.299 0 010-.534l1.716-.858 5.317 2.659c.505.252 1.1.252 1.604 0l5.317-2.659z" />
        </Svg>
      );

    case 'completed':
      return (
        <Svg fill="none" viewBox="0 0 15 15" height={height} width={width}>
          <Path
            stroke={color}
            d="M4 7.5L7 10l4-5m-3.5 9.5a7 7 0 110-14 7 7 0 010 14z"
          />
        </Svg>
      );
    case 'bin':
      return (
        <Svg viewBox="0 0 24 24" fill={color} height={height} width={width}>
          <Path fill="none" d="M0 0h24v24H0z" />
          <Path d="M7 4V2h10v2h5v2h-2v15a1 1 0 01-1 1H5a1 1 0 01-1-1V6H2V4h5zM6 6v14h12V6H6zm3 3h2v8H9V9zm4 0h2v8h-2V9z" />
        </Svg>
      );
    case 'search':
      return (
        <Svg viewBox="0 0 24 24" fill={color} height={height} width={width}>
          <Path d="M16.32 14.9l5.39 5.4a1 1 0 01-1.42 1.4l-5.38-5.38a8 8 0 111.41-1.41zM10 16a6 6 0 100-12 6 6 0 000 12z" />
        </Svg>
      );
    case 'vertical-3dots':
      return (
        <Svg fill={color} viewBox="0 0 16 16" height={height} width={width}>
          <Path d="M9.5 13a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zm0-5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zm0-5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" />
        </Svg>
      );
    case 'checkbox-blank':
      return (
        <Svg viewBox="0 0 24 24" fill={color} height={height} width={width}>
          <Path d="M23 4.5C23 6.43 21.43 8 19.5 8S16 6.43 16 4.5 17.57 1 19.5 1 23 2.57 23 4.5M19.5 10H19v9H5V5h9.03C14 4.84 14 4.67 14 4.5c0-.5.08-1 .21-1.5H5c-1.11 0-2 .89-2 2v14a2 2 0 002 2h14c1.11 0 2-.89 2-2V9.79c-.5.13-1 .21-1.5.21z" />
        </Svg>
      );
    case 'checkbox-checked':
      return (
        <Svg viewBox="0 0 24 24" fill={color} height={height} width={width}>
          <Path d="M19 19H5V5h10V3H5c-1.11 0-2 .89-2 2v14a2 2 0 002 2h14a2 2 0 002-2v-8h-2m-11.09-.92L6.5 11.5 11 16 21 6l-1.41-1.42L11 13.17l-3.09-3.09z" />
        </Svg>
      );
    case 'arrow-left':
      return (
        <Svg fill={color} viewBox="0 0 16 16" height={height} width={width}>
          <Path
            fillRule="evenodd"
            d="M12 8a.5.5 0 01-.5.5H5.707l2.147 2.146a.5.5 0 01-.708.708l-3-3a.5.5 0 010-.708l3-3a.5.5 0 11.708.708L5.707 7.5H11.5a.5.5 0 01.5.5z"
          />
        </Svg>
      );
    case 'filledStar':
      return (
        <Svg viewBox="0 0 512 512" fill={color} height={height} width={width}>
          <Path d="M394 480a16 16 0 01-9.39-3L256 383.76 127.39 477a16 16 0 01-24.55-18.08L153 310.35 23 221.2a16 16 0 019-29.2h160.38l48.4-148.95a16 16 0 0130.44 0l48.4 149H480a16 16 0 019.05 29.2L359 310.35l50.13 148.53A16 16 0 01394 480z" />
        </Svg>
      );
    case 'starOutline':
      return (
        <Svg viewBox="0 0 512 512" fill={color} height={height} width={width}>
          <Path
            fill="none"
            stroke={color}
            strokeLinejoin="round"
            strokeWidth={32}
            d="M480 208H308L256 48l-52 160H32l140 96-54 160 138-100 138 100-54-160z"
          />
        </Svg>
      );
    case 'box':
      return (
        <Svg viewBox="0 0 24 24" fill={color} height={height} width={width}>
          <Path d="M9 9h6v6H9z" />
          <Path d="M19 17V7c0-1.103-.897-2-2-2H7c-1.103 0-2 .897-2 2v10c0 1.103.897 2 2 2h10c1.103 0 2-.897 2-2zM7 7h10l.002 10H7V7z" />
        </Svg>
      );
    case 'offNotification':
      return (
        <Svg viewBox="0 0 512 512" fill={color} height={height} width={width}>
          <Path d="M448 464a15.92 15.92 0 01-11.31-4.69l-384-384a16 16 0 0122.62-22.62l384 384A16 16 0 01448 464zM440.08 341.31c-1.66-2-3.29-4-4.89-5.93-22-26.61-35.31-42.67-35.31-118 0-39-9.33-71-27.72-95-13.56-17.73-31.89-31.18-56.05-41.12a3 3 0 01-.82-.67C306.6 51.49 282.82 32 256 32s-50.59 19.49-59.28 48.56a3.13 3.13 0 01-.81.65 157.88 157.88 0 00-21.88 11 8 8 0 00-1.49 12.49l261.78 261.74a8 8 0 0013.6-6.63 35.39 35.39 0 00-7.84-18.5zM112.14 217.35c0 75.36-13.29 91.42-35.31 118-1.6 1.93-3.23 3.89-4.89 5.93a35.16 35.16 0 00-4.65 37.62c6.17 13 19.32 21.07 34.33 21.07H312.8a8 8 0 005.66-13.66l-192-192a8 8 0 00-13.62 5q-.7 8.69-.7 18.04zM256 480a80.06 80.06 0 0070.44-42.13 4 4 0 00-3.54-5.87H189.12a4 4 0 00-3.55 5.87A80.06 80.06 0 00256 480z" />
        </Svg>
      );
    case 'notification':
      return (
        <Svg viewBox="0 0 512 512" fill={color} height={height} width={width}>
          <Path d="M440.08 341.31c-1.66-2-3.29-4-4.89-5.93-22-26.61-35.31-42.67-35.31-118 0-39-9.33-71-27.72-95-13.56-17.73-31.89-31.18-56.05-41.12a3 3 0 01-.82-.67C306.6 51.49 282.82 32 256 32s-50.59 19.49-59.28 48.56a3.13 3.13 0 01-.81.65c-56.38 23.21-83.78 67.74-83.78 136.14 0 75.36-13.29 91.42-35.31 118-1.6 1.93-3.23 3.89-4.89 5.93a35.16 35.16 0 00-4.65 37.62c6.17 13 19.32 21.07 34.33 21.07H410.5c14.94 0 28-8.06 34.19-21a35.17 35.17 0 00-4.61-37.66zM256 480a80.06 80.06 0 0070.44-42.13 4 4 0 00-3.54-5.87H189.12a4 4 0 00-3.55 5.87A80.06 80.06 0 00256 480z" />
        </Svg>
      );
    case 'exchange':
      return (
        <Svg viewBox="0 0 24 24" fill={color} height={height} width={width}>
          <Path d="M18 10a1 1 0 0 0-1-1H5.41l2.3-2.29a1 1 0 0 0-1.42-1.42l-4 4a1 1 0 0 0-.21 1.09A1 1 0 0 0 3 11h14a1 1 0 0 0 1-1zm3.92 3.62A1 1 0 0 0 21 13H7a1 1 0 0 0 0 2h11.59l-2.3 2.29a1 1 0 0 0 0 1.42 1 1 0 0 0 1.42 0l4-4a1 1 0 0 0 .21-1.09z" />
        </Svg>
      );
    case 'money':
      return (
        <Svg viewBox="0 0 24 24" fill={color} height={height} width={width}>
          <Path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10zm1.5-14c.328.436.563.946.675 1.5H16V11h-1.825a3.751 3.751 0 0 1-3.675 3h-.19l3.72 3.72-1.06 1.06L8 13.81V12.5h2.5a2.25 2.25 0 0 0 2.122-1.5H8V9.5h4.622A2.251 2.251 0 0 0 10.5 8H8V6.5h8V8h-2.5z" />
        </Svg>
      );
    case 'money-out':
      return (
        <Svg viewBox="0 0 24 24" fill={color} height={height} width={width}>
          <Path d="m10.46 6 .54-.59V9a1 1 0 0 0 2 0V5.41l.54.55A1 1 0 0 0 15 6a1 1 0 0 0 0-1.42l-2.29-2.29a1 1 0 0 0-.33-.21 1 1 0 0 0-.76 0 1 1 0 0 0-.33.21L9 4.54A1 1 0 0 0 10.46 6zM12 12a3 3 0 1 0 3 3 3 3 0 0 0-3-3zm0 4a1 1 0 1 1 1-1 1 1 0 0 1-1 1zm-7-1a1 1 0 1 0 1-1 1 1 0 0 0-1 1zm14 0a1 1 0 1 0-1 1 1 1 0 0 0 1-1zm1-7h-4a1 1 0 0 0 0 2h4a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1v-8a1 1 0 0 1 1-1h4a1 1 0 0 0 0-2H4a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h16a3 3 0 0 0 3-3v-8a3 3 0 0 0-3-3z" />
        </Svg>
      );
    case 'money-in':
      return (
        <Svg viewBox="0 0 24 24" fill={color} height={height} width={width}>
          <Path d="M12 12a3 3 0 1 0 3 3 3 3 0 0 0-3-3zm0 4a1 1 0 1 1 1-1 1 1 0 0 1-1 1zm-.71-6.29a1 1 0 0 0 .33.21.94.94 0 0 0 .76 0 1 1 0 0 0 .33-.21L15 7.46A1 1 0 1 0 13.54 6l-.54.59V3a1 1 0 0 0-2 0v3.59L10.46 6A1 1 0 0 0 9 7.46zM19 15a1 1 0 1 0-1 1 1 1 0 0 0 1-1zm1-7h-3a1 1 0 0 0 0 2h3a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1v-8a1 1 0 0 1 1-1h3a1 1 0 0 0 0-2H4a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h16a3 3 0 0 0 3-3v-8a3 3 0 0 0-3-3zM5 15a1 1 0 1 0 1-1 1 1 0 0 0-1 1z" />
        </Svg>
      );
    case 'home':
      return (
        <Svg viewBox="0 0 16 16" fill={color} height={height} width={width}>
          <Path d="m16 9.226-8-6.21-8 6.21V6.694l8-6.21 8 6.21zM14 9v6h-4v-4H6v4H2V9l6-4.5z" />
        </Svg>
      );
    case 'calender':
      return (
        <Svg viewBox="0 0 24 24" fill={color} height={height} width={width}>
          <Path d="M2 19c0 1.7 1.3 3 3 3h14c1.7 0 3-1.3 3-3v-8H2v8zM19 4h-2V3c0-.6-.4-1-1-1s-1 .4-1 1v1H9V3c0-.6-.4-1-1-1s-1 .4-1 1v1H5C3.3 4 2 5.3 2 7v2h20V7c0-1.7-1.3-3-3-3z" />
        </Svg>
      );
    case 'timer':
      return (
        <Svg viewBox="0 0 24 24" fill={color} height={height} width={width}>
          <Path d="M12 20a7 7 0 01-7-7 7 7 0 017-7 7 7 0 017 7 7 7 0 01-7 7m7.03-12.61l1.42-1.42c-.45-.51-.9-.97-1.41-1.41L17.62 6c-1.55-1.26-3.5-2-5.62-2a9 9 0 00-9 9 9 9 0 009 9c5 0 9-4.03 9-9 0-2.12-.74-4.07-1.97-5.61M11 14h2V8h-2m4-7H9v2h6V1z" />
        </Svg>
      );
    case 'tick':
      return (
        <Svg fill="none" viewBox="0 0 15 15" height={height} width={width}>
          <Path
            fill={color}
            fillRule="evenodd"
            d="M14.707 3L5.5 12.207.293 7 1 6.293l4.5 4.5 8.5-8.5.707.707z"
            clipRule="evenodd"
          />
        </Svg>
      );
    case 'edit':
      return (
        <Svg
          fill="none"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          viewBox="0 0 24 24"
          height={height}
          width={width}>
          <Path d="M17 3a2.828 2.828 0 114 4L7.5 20.5 2 22l1.5-5.5L17 3z" />
        </Svg>
      );
    case 'cross':
      return (
        <Svg viewBox="0 0 24 24" width={width} height={height}>
          <Path
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.5"
            d="m18 6l-6 6m0 0l-6 6m6-6l6 6m-6-6L6 6"
            color={color}></Path>
        </Svg>
      );
    case 'outgoing':
      return (
        <Svg viewBox="0 0 24 24" width={width} height={height}>
          <Path
            fill={color}
            d="m3 8.41l9 9l7-7V15h2V7h-8v2h4.59L12 14.59L4.41 7z"></Path>
        </Svg>
      );
    case 'catagory':
      return (
        <Svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          width={width}
          height={height}>
          <Path
            fill={color}
            fillRule="evenodd"
            d="M5.75 1a.75.75 0 1 0 0 1.5h4.5a.75.75 0 1 0 0-1.5zm-2 2.5a.75.75 0 1 0 0 1.5h8.5a.75.75 0 1 0 0-1.5zm-1.25 4v6h11v-6zM2 6a1 1 0 0 0-1 1v7a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V7a1 1 0 0 0-1-1zm8.28 3.83a.75.75 0 1 0-1.06-1.06l-1.97 1.97l-.47-.47a.75.75 0 1 0-1.06 1.06l1 1a.75.75 0 0 0 1.06 0z"
            clipRule="evenodd"></Path>
        </Svg>
      );
    case 'delete':
      return (
        <Svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          width={width}
          height={height}>
          <Path
            fill={color}
            d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6zM19 4h-3.5l-1-1h-5l-1 1H5v2h14z"></Path>
        </Svg>
      );
    case 'incoming':
      return (
        <Svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          width={width}
          height={height}>
          <Path
            fill={color}
            d="m19.778 5.636l-1.414-1.414L6.93 15.657V10.07h-2v9h9v-2H8.343z"></Path>
        </Svg>
      );

    default:
      return (
        <Svg
          width="27"
          height="27"
          viewBox="0 0 27 27"
          fill="none"
          xmlns="http://www.w3.org/2000/svg">
          <G clip-path="url(#clip0_61_311)">
            <Path
              d="M13.5 13.5C14.835 13.5 16.1401 13.1041 17.2501 12.3624C18.3601 11.6207 19.2253 10.5665 19.7362 9.33312C20.2471 8.09972 20.3808 6.74252 20.1203 5.43314C19.8599 4.12377 19.217 2.92104 18.273 1.97703C17.329 1.03303 16.1262 0.390153 14.8169 0.129702C13.5075 -0.130748 12.1503 0.00292468 10.9169 0.513816C9.68349 1.02471 8.62928 1.88987 7.88758 2.9999C7.14588 4.10994 6.75 5.41498 6.75 6.75C6.75179 8.53967 7.46352 10.2555 8.729 11.521C9.99449 12.7865 11.7103 13.4982 13.5 13.5ZM13.5 2.25C14.39 2.25 15.26 2.51392 16.0001 3.00839C16.7401 3.50286 17.3169 4.20566 17.6575 5.02793C17.9981 5.8502 18.0872 6.75499 17.9135 7.62791C17.7399 8.50082 17.3113 9.30265 16.682 9.93198C16.0526 10.5613 15.2508 10.9899 14.3779 11.1635C13.505 11.3372 12.6002 11.2481 11.7779 10.9075C10.9557 10.5669 10.2529 9.99009 9.75839 9.25007C9.26392 8.51005 9 7.64002 9 6.75C9 5.55653 9.47411 4.41194 10.318 3.56802C11.1619 2.72411 12.3065 2.25 13.5 2.25Z"
              fill={color}
            />
            <Path
              d="M13.5 15.75C10.8156 15.753 8.24199 16.8207 6.34383 18.7188C4.44567 20.617 3.37798 23.1906 3.375 25.875C3.375 26.1734 3.49353 26.4595 3.7045 26.6705C3.91548 26.8815 4.20163 27 4.5 27C4.79837 27 5.08452 26.8815 5.29549 26.6705C5.50647 26.4595 5.625 26.1734 5.625 25.875C5.625 23.7864 6.45468 21.7834 7.93153 20.3065C9.40838 18.8297 11.4114 18 13.5 18C15.5886 18 17.5916 18.8297 19.0685 20.3065C20.5453 21.7834 21.375 23.7864 21.375 25.875C21.375 26.1734 21.4935 26.4595 21.7045 26.6705C21.9155 26.8815 22.2016 27 22.5 27C22.7984 27 23.0845 26.8815 23.2955 26.6705C23.5065 26.4595 23.625 26.1734 23.625 25.875C23.622 23.1906 22.5543 20.617 20.6562 18.7188C18.758 16.8207 16.1844 15.753 13.5 15.75Z"
              fill={color}
            />
          </G>
          <Defs>
            <ClipPath id="clip0_61_311">
              <Rect width="27" height="27" fill={COLORS.colorWhite} />
            </ClipPath>
          </Defs>
        </Svg>
      );
  }
}
