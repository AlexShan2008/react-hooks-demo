import React, { useEffect, useReducer, useRef } from 'react'
import useStyles from './styles'
import PropTypes from 'prop-types'
import { SLIDE_DURATION } from './data'
import useProgress from './useProgress'

function Carousel (props) {
  const classes = useStyles()
  return (
    <div
      style={{ width: props.width + 'px', height: props.height + 'px' }}
      className={classes.Carousel}
      {...props}
    />
  )
}
Carousel.propTypes = {
  width: PropTypes.number.isRequired,
  height: PropTypes.number.isRequired
}

function Controls (props) {
  const classes = useStyles()
  return <div className={classes.Controls} {...props} />
}

function Slides ({ slides, width, currentIndex, children }) {
  const classes = useStyles()
  return (
    <div
      className={classes.Slides}
      style={{
        width: slides.length * width + 'px',
        left: -currentIndex * width + 'px'
      }}
    >
      {children}
    </div>
  )
}
Slides.propTypes = {
  slides: PropTypes.array.isRequired,
  currentIndex: PropTypes.number.isRequired,
  width: PropTypes.number.isRequired,
  children: PropTypes.any
}

function Slide ({ id, title, image, isCurrent, takeFocus, children }) {
  const classes = useStyles()
  const ref = useRef()

  useEffect(() => {
    if (isCurrent && takeFocus) {
      ref.current.focus()
    }
  }, [isCurrent, takeFocus])

  return (
    <li
      id={id}
      ref={ref}
      className={classes.Slide}
      style={{ backgroundImage: `url(${image})` }}
    >
      <div className='SlideContent'>
        <h2 className='Title'>{title}</h2>
        {children}
      </div>
    </li>
  )
}
Slide.propTypes = {
  id: PropTypes.string,
  title: PropTypes.string,
  image: PropTypes.string.isRequired,
  isCurrent: PropTypes.bool.isRequired,
  takeFocus: PropTypes.bool.isRequired,
  children: PropTypes.any
}

function SlideNav (props) {
  const classes = useStyles()
  return <div className={classes.SlideNav} {...props} />
}

function SlideNavItem (props) {
  const classes = useStyles()
  return (
    <div
      className={
        props.isCurrent
          ? classes.SlideNavItem + ' active'
          : classes.SlideNavItem
      }
    />
  )
}
SlideNavItem.propTypes = {
  isCurrent: PropTypes.bool.isRequired
}

function IconButton (props) {
  const classes = useStyles()
  return <button className={classes.IconButton} {...props} />
}

function ProgressBar ({ animate, time }) {
  const classes = useStyles()
  const progress = useProgress(animate, time)

  return (
    <div
      className={classes.ProgressBar}
      style={{ width: `${progress * 100}%` }}
    />
  )
}
ProgressBar.propTypes = {
  animate: PropTypes.bool.isRequired,
  time: PropTypes.number.isRequired
}

function SpacerGif ({ width }) {
  return <div style={{ display: 'inline-block', width }} />
}
SpacerGif.propTypes = {
  width: PropTypes.string
}

function VisuallyHidden (props) {
  return <div {...props} />
}

function Alert (props) {
  return <div {...props} />
}

const initialState = { currentIndex: 0, isPlaying: false, takeFocus: false }

export default function MyCarousel ({ options }) {
  const {
    width = 800,
    height = 500,
    duration = SLIDE_DURATION,
    slides = []
  } = options

  const classes = useStyles()
  const [state, dispatch] = useReducer((state, action) => {
    switch (action.type) {
      case 'PROGRESS':
      case 'NEXT':
        return {
          ...state,
          takeFocus: false,
          isPlaying: action.type === 'PROGRESS',
          currentIndex: (state.currentIndex + 1) % slides.length
        }
      case 'PREV':
        return {
          ...state,
          isPlaying: false,
          takeFocus: false,
          currentIndex: (state.currentIndex - 1 + slides.length) % slides.length
        }
      case 'PLAY':
        return {
          ...state,
          isPlaying: true,
          takeFocus: false
        }
      case 'PAUSE':
        return {
          ...state,
          isPlaying: false,
          takeFocus: false
        }
      case 'GOTO':
        return {
          ...state,
          takeFocus: true,
          currentIndex: action.index
        }
      default:
        return state
    }
  }, initialState)

  useEffect(() => {
    if (state.isPlaying) {
      const timeoutId = setTimeout(() => {
        dispatch({
          type: 'PROGRESS'
        })
      }, duration)

      return () => {
        clearTimeout(timeoutId)
      }
    }
  }, [duration, state.currentIndex, state.isPlaying])

  return (
    <>
      <div className={classes.root}>
        <Carousel width={width} height={height}>
          <Slides
            slides={slides}
            width={width}
            currentIndex={state.currentIndex}
          >
            {slides.map((image, index) => (
              <Slide
                key={index}
                id={`image-${index}`}
                image={image.img}
                title={image.title}
                isCurrent={index === state.currentIndex}
                takeFocus={state.takeFocus}
                children={image.content}
              />
            ))}
          </Slides>

          <SlideNav>
            {slides.map((slide, index) => (
              <SlideNavItem
                key={index}
                isCurrent={index === state.currentIndex}
                aria-label={`Slide ${index + 1}`}
                onClick={() => {
                  dispatch({
                    type: 'GOTO',
                    index
                  })
                }}
              />
            ))}
          </SlideNav>

          <Controls>
            {state.isPlaying ? (
              <IconButton
                onClick={() => {
                  dispatch({ type: 'PAUSE' })
                }}
              >
                Pause
              </IconButton>
            ) : (
              <IconButton
                onClick={() => {
                  dispatch({ type: 'PLAY' })
                }}
              >
                Play
              </IconButton>
            )}

            <SpacerGif width='10px' />

            <IconButton
              onClick={() => {
                dispatch({ type: 'PREV' })
              }}
            >
              Prev
            </IconButton>
            <IconButton
              onClick={() => {
                dispatch({ type: 'NEXT' })
              }}
            >
              Next
            </IconButton>
          </Controls>

          <ProgressBar
            key={state.currentIndex + state.isPlaying}
            animate={state.isPlaying}
            time={duration}
          />

          <VisuallyHidden>
            <Alert>
              Item {state.currentIndex + 1} of {slides.length}
            </Alert>
          </VisuallyHidden>
        </Carousel>
      </div>
    </>
  )
}

MyCarousel.propTypes = {
  options: PropTypes.object.isRequired
}
