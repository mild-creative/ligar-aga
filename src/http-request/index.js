import moment from 'moment-timezone';
import { db } from './firebase';

export const getComments = async (Page = 1, PageSize) => {
  try {
    const result = await db.collection('comment').orderBy('createdAt', 'desc').get()
    const length = result.docs.length;
    const data = []
    result.forEach(val => {
      data.push({
        ...val.data(),
        id: val.id
      })
    })
    return {
      comment: data,
      length
    }
  } catch (error) {
    return {
      msg: 'error while get data',
      data: error.message
    }
  }
}

export const postComments = async (data) => {
  try {
    await db.collection('comment').doc().set({
      ...data,
      createdAt: moment().tz('Asia/Jakarta').format()
    });
    return data
  } catch (error) {
    throw error
  }

}

export const getGallery = async (page = 1, pageSize) => {
  try {
    const result = await db.collection('gallery').orderBy('createdAt', 'desc').get()
    const length = result.docs.length;
    const data = []
    result.forEach(val => {
      data.push({
        ...val.data(),
        id: val.id
      })
    })
    return {
      data: {
        gallery: data,
        length
      }
    }
  } catch (error) {
    return {
      msg: 'error while get data',
      data: error.message
    }
  }
}

export const postGallery = async (data) => {
  try {
    await db.collection('gallery').doc().set({
      ...data,
      createdAt: moment().tz('Asia/Jakarta').format()
    });
    return data
  } catch (error) {
    throw error
  }

}