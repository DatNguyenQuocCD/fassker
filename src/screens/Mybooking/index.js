import React, {useRef, useState} from 'react';
import {Button, Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import ImagePicker from 'react-native-image-crop-picker';
import Icon from 'react-native-vector-icons/Feather';
import {Modalize} from 'react-native-modalize';
import HeaderApp from '../../components/headerApp/HeaderApp';
import Input from '../../components/input/input';
import {addPostsApi} from '../../api/posts';
import BigButton from '../../components/button/BigButton';

const MyBooking = () => {
  const [title, setTitle] = useState('');
  const [image, setImage] = useState('');

  const takePhotoFromCamera = () => {
    ImagePicker.openCamera({
      width: 400,
      height: 400,
      cropping: true,
    }).then(image => {
      console.log(image);
      setImage(image.path);
    });
  };
  const choosePhoto = () => {
    ImagePicker.openPicker({
      width: 400,
      height: 400,
      cropping: true,
    }).then(image => {
      console.log(image);
      setImage(image.path);
    });
  };

  const modalizeRef = useRef(null);

  const onOpen = () => {
    modalizeRef.current?.open();
  };

  const today = new Date();
  
  const newPost = {
    "avata": "https://scontent.fdad1-3.fna.fbcdn.net/v/t39.30808-6/285208640_111016871626407_465232664505094497_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=KuQBORBeU8MAX_ss5Xr&_nc_ht=scontent.fdad1-3.fna&oh=00_AfAkJgpATWXMCwQuS0W9hVkx0i6WOVZIKCbCdltgAuYe2A&oe=635FB9C4",
    "name": "Nguyen Quoc Dat",
    "image": image,
    "time": today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate()+" vào lúc: "+today.getHours() + ":" + today.getMinutes(),
    "content": title,
    "like": 0
  };

  const addPost = () =>{
    addPostsApi(newPost)
    setTitle("")
    setImage("")
  };
  return (
    <View style={{flex: 1}}>
      <HeaderApp />
      <View style={{alignItems: 'center', justifyContent: 'center'}}>
        <Text style={{fontSize: 24}}>ADD POST</Text>
        <Input placeholder={'Enter post title'} name={'user'} setData={setTitle} Text={title}/>
        <TouchableOpacity
          style={{alignItems: 'center', justifyContent: 'center'}}
          onPress={onOpen}>
          <Icon name={'image'} color={'black'} size={30} />
          <Text>Add Image</Text>
        </TouchableOpacity>
        <View style={{width: 350, marginTop: 30, marginBottom: 30}}>
          <Button
            title='Post'
            color={"black"}
            onPress={addPost}
            styles={{backgroundColor:"white"}}
          />
        </View>
        <View  style={{width: 350, marginTop: 30, marginBottom: 30}}>
          <Text style={{marginBottom:20}}>{title}</Text>
          <Image source={{uri: image}} style={{width: 350, height: 350}} />
        </View>
      </View>
      <Modalize ref={modalizeRef} 
        modalHeight={200} 
        handlePosition={'inside'}
        onClose={()=>{
        }}
      >
        <View style={{flex: 1, alignItems: 'center'}}>
          <View style={{width:300, marginTop: 30}}>
            <BigButton
              title={"Choose a photo"}
              onPress={choosePhoto}
            />
          </View>
          <View style={{width:300, marginTop: 10}}>
            <BigButton
              title={"Take a photo"}
              onPress={takePhotoFromCamera}
            />
          </View>
        </View>
      </Modalize>
    </View>
  );
};

export default MyBooking;

const styles = StyleSheet.create({});
