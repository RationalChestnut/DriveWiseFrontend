import styled from "styled-components/native";
import { Text, TouchableOpacity } from "react-native";
import { RFPercentage } from "react-native-responsive-fontsize";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

export const ReportContainer = styled(TouchableOpacity)`
  padding: ${hp("2%")}px ${wp("4")}px;
  background-color: #f76045;
  position: absolute;
  bottom: 175px;
  left: 10px;
  border-radius: ${wp(2)}px;
`;

export const ReportAccidentText = styled(Text)`
  color: white;
  font-size: ${RFPercentage(2)}px;
  font-weight: 600;
`;
