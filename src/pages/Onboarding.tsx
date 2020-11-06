import React from 'react'
import { Box, Typography, Button } from '@material-ui/core'
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles'

interface Props {}
const Onboarding = (props: Props) => {
    const classes = useStyles()

    return (
        <Box flex={1} p={3} className={classes.wrapper}>
            <Typography variant="h1">Sampo</Typography>
            <Box mt={3} />
            <Button color="primary" variant="contained">
                Start saving
            </Button>
        </Box>
    )
}

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        wrapper: {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
        },
    })
)

export default Onboarding
