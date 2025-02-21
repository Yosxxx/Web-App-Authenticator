import Content from "./Content";
import Lottie from "lottie-react";

import FaceDetector from "../assets/FaceDetector.json";
const MTCNNTitle = "MTCNN";
const MTCNNDescription =
  "Multi-Task Cascaded Convolutional Neural Network (MTCNN) is a deep learning algorithm that detects faces in images and videos. It's a popular and accurate face detection tool. ";
const MTCNNInstall = "-";
const MTCNNTitleColor = "#7790b6";

import FaceRecognition from "../assets/FaceRecognition.json";
const FaceNetTitle = "FaceNet";
const FaceNetDescription =
  "This is a TensorFlow implementation of the face recognizer described in the paper FaceNet: A Unified Embedding for Face Recognition and Clustering. The project also uses ideas from the paper Deep Face Recognition from the Visual Geometry Group at Oxford.";
const FaceNetInstall = "-";
const FaceNetTitleColor = "#bcaba2";

function OurAI() {
  return (
    <div className="w-[80vw] container mx-auto my-15 flex flex-col gap-y-40">
      <div className="flex flex-col-reverse lg:flex-row gap-x-50 items-center">
        <Content
          title={MTCNNTitle}
          description={MTCNNDescription}
          install={MTCNNInstall}
          titleColor={MTCNNTitleColor}
        ></Content>
        <Lottie
          animationData={FaceDetector}
          style={{ width: "100%", height: "100%" }}
          className="lg:mr-20"
        ></Lottie>
      </div>
      <div className="flex flex-col-reverse lg:flex-row gap-x-50 items-center">
        <Content
          title={FaceNetTitle}
          description={FaceNetDescription}
          install={FaceNetInstall}
          titleColor={FaceNetTitleColor}
        ></Content>
        <Lottie
          animationData={FaceRecognition}
          style={{ width: "100%", height: "100%" }}
          className="lg:mr-20"
        ></Lottie>
      </div>
    </div>
  );
}

export default OurAI;
