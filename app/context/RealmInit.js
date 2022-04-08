import React from 'react';
import {PrivateData, PublicData} from './RealmConfig';

const {RealmProvider: Private} = PrivateData;
const {RealmProvider: Public} = PublicData;

export default RealmInitiallizer = props => {
  console.log(props.user);
  return (
    // <Public
    //   sync={{
    //     user: props?.user,
    //     partitionValue: props?.user.customData.designation,
    //   }}>
    //   <Private sync={{user: props?.user, partitionValue: props?.user.name}}>
    <>{props.children}</>
    //   {/* </Private>
    // </Public> */}
  );
};
