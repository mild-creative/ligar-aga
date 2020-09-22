import React, { useState, useEffect } from 'react';
import {
    TableContainer,
    TableBody,
    TableCell,
    TableHead,
    TableRow,
    Table,
    Paper
} from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';
import { getComments, getGallery } from '../http-request/index';
import api from '../http-request/base-url';


const useStyles = makeStyles({
    table: {
        maxWidth: 650,
    },
});
function Admin() {
    const classes = useStyles();
    const [comment, setComment] = useState([]);
    const [gallery, setGallery] = useState([]);
    const [loading, setLoading] = useState(false);
    useEffect(() => {
        fetchComments(1, 1000000);
        fetchGallery(1, 10000000)
    }, [])
    const fetchComments = async (showPage) => {
        const allComments = await getComments(showPage);
        setComment(allComments?.comment)

    }
    const fetchGallery = async (showPage) => {
        try {
            const galleryContents = await getGallery(showPage);
            setGallery(galleryContents?.data?.gallery);
        } finally {
        }
    }
    const deleteComment = async (id) => {
        try {
            setLoading(true)
            await api().get(`/comment/delete?id=${id}`)
            fetchComments(1, 1000000)
            setLoading(false)

        } catch (error) {
            setLoading(false)
            alert('error')
        }
    }
    const deleteGallery = async (id) => {
        try {
            setLoading(true)
            await api().get(`/gallery/delete?id=${id}`)
            setLoading(false)
            fetchGallery(1, 1000000)
        } catch (error) {
            setLoading(false)
            alert('error')
        }
    }


    return (
        <div style={{ display: 'flex', justifyContent: 'center', flexDirection: 'column', alignItems: 'center' }}>
            {
                loading
                    ? <div style={{ width: '100%', height: '100%', alignItems: 'center', justifyContent: 'center', display: 'flex', position: 'absolute' }}>
                        <CircularProgress style={{ position: 'fixed' }} color="secondary" />
                    </div>
                    : null
            }
            <div>
                <h3>
                    Comment
            </h3>
            </div>
            <TableContainer className={classes.table} component={Paper}>
                <Table className={classes.table} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>Name</TableCell>
                            <TableCell align="right">action</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {
                            comment.map(val => (
                                <TableRow >
                                    <TableCell component="th" scope="row">
                                        {val.name}
                                    </TableCell>
                                    <TableCell align='right'>
                                        <button onClick={() => { deleteComment(val.id) }}>
                                            delete
                                   </button>
                                    </TableCell>
                                </TableRow>
                            ))
                        }
                    </TableBody>
                </Table>
            </TableContainer>
            <div>
                <h3>
                    Gallery
            </h3>
            </div>
            <TableContainer className={classes.table} component={Paper}>
                <Table className={classes.table} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>Name</TableCell>
                            <TableCell align="right">action</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {
                            gallery.map(val => (
                                <TableRow >
                                    <TableCell component="th" scope="row">
                                        {val.name}
                                    </TableCell>
                                    <TableCell align='right'>
                                        <button onClick={() => { deleteGallery(val.id) }}>
                                            delete
                                   </button>
                                    </TableCell>
                                </TableRow>
                            ))
                        }
                    </TableBody>
                </Table>
            </TableContainer>

        </div>
    )
}

export default Admin;