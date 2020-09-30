import { makeStyles } from "@material-ui/core";
import { NextPage } from 'next'

const useStyles = makeStyles(() => {
    return {
      wrapper: {
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100%',
      }
    }
  })

export const Header: NextPage = () => {
    const classes = useStyles()
    return <div className={classes.wrapper}>header</div>
}
