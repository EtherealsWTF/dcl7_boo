import { createChannel } from '../node_modules/decentraland-builder-scripts/channel'
import { createInventory } from '../node_modules/decentraland-builder-scripts/inventory'
import Script1 from "../80d9cb1c-2fcf-4585-8e19-e2d5621fd54d/src/item"
import Script2 from "../7d669c08-c354-45e4-b3a3-c915c8fd6b6e/src/item"
import Script3 from "../b88efbbf-2a9a-47b4-86e1-e38ecc2b433b/src/item"
import Script4 from "../a747f104-5434-42a8-a543-8739c24cf253/src/item"
import Script5 from "../28352c3a-cc20-4ab4-b4b8-a4562a6b0d4d/src/item"

const _scene = new Entity('_scene')
engine.addEntity(_scene)
const transform = new Transform({
  position: new Vector3(0, 0, 0),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
_scene.addComponentOrReplace(transform)

const nftPictureFrame = new Entity('nftPictureFrame')
engine.addEntity(nftPictureFrame)
nftPictureFrame.setParent(_scene)
const transform2 = new Transform({
  position: new Vector3(15.64647102355957, 13.076227188110352, 17.11261558532715),
  rotation: new Quaternion(-4.127578846475997e-15, 0.7071068286895752, -8.429368847373553e-8, -0.7071068286895752),
  scale: new Vector3(4.500004291534424, 4.5, 0.5202183723449707)
})
nftPictureFrame.addComponentOrReplace(transform2)

const nftPictureFrame2 = new Entity('nftPictureFrame2')
engine.addEntity(nftPictureFrame2)
nftPictureFrame2.setParent(_scene)
const transform3 = new Transform({
  position: new Vector3(15.64647102355957, 13.076226234436035, 12.823270797729492),
  rotation: new Quaternion(-4.127578846475997e-15, 0.7071068286895752, -8.429368847373553e-8, -0.7071068286895752),
  scale: new Vector3(4.500004291534424, 4.5, 0.5202183127403259)
})
nftPictureFrame2.addComponentOrReplace(transform3)

const nftPictureFrame3 = new Entity('nftPictureFrame3')
engine.addEntity(nftPictureFrame3)
nftPictureFrame3.setParent(_scene)
const transform4 = new Transform({
  position: new Vector3(15.64647102355957, 13.076225280761719, 8.525838851928711),
  rotation: new Quaternion(-4.127578846475997e-15, 0.7071068286895752, -8.429368847373553e-8, -0.7071068286895752),
  scale: new Vector3(4.500004291534424, 4.5, 0.5202181935310364)
})
nftPictureFrame3.addComponentOrReplace(transform4)

const nftPictureFrame4 = new Entity('nftPictureFrame4')
engine.addEntity(nftPictureFrame4)
nftPictureFrame4.setParent(_scene)
const transform5 = new Transform({
  position: new Vector3(15.64647102355957, 13.076225280761719, 4.000000953674316),
  rotation: new Quaternion(-4.127578846475997e-15, 0.7071068286895752, -8.429368847373553e-8, -0.7071068286895752),
  scale: new Vector3(4.50000524520874, 4.5, 0.5202179551124573)
})
nftPictureFrame4.addComponentOrReplace(transform5)

const nftPictureFrame5 = new Entity('nftPictureFrame5')
engine.addEntity(nftPictureFrame5)
nftPictureFrame5.setParent(_scene)
const transform6 = new Transform({
  position: new Vector3(15.64647102355957, 13.076227188110352, 21.587221145629883),
  rotation: new Quaternion(-4.127578846475997e-15, 0.7071068286895752, -8.429368847373553e-8, -0.7071068286895752),
  scale: new Vector3(4.500004291534424, 4.5, 0.5202184915542603)
})
nftPictureFrame5.addComponentOrReplace(transform6)

const nftPictureFrame6 = new Entity('nftPictureFrame6')
engine.addEntity(nftPictureFrame6)
nftPictureFrame6.setParent(_scene)
const transform7 = new Transform({
  position: new Vector3(15.64647102355957, 13.076228141784668, 25.876564025878906),
  rotation: new Quaternion(-4.127578846475997e-15, 0.7071068286895752, -8.429368847373553e-8, -0.7071068286895752),
  scale: new Vector3(4.500004291534424, 4.5, 0.520218551158905)
})
nftPictureFrame6.addComponentOrReplace(transform7)

const nftPictureFrame9 = new Entity('nftPictureFrame9')
engine.addEntity(nftPictureFrame9)
nftPictureFrame9.setParent(_scene)
const transform8 = new Transform({
  position: new Vector3(3.387575149536133, 17.699689865112305, 0.4532342553138733),
  rotation: new Quaternion(4.686765010781342e-15, 0, -6.0168951526891334e-15, 1),
  scale: new Vector3(4.408069133758545, 4.408059597015381, 0.5292617082595825)
})
nftPictureFrame9.addComponentOrReplace(transform8)

const nftPictureFrame10 = new Entity('nftPictureFrame10')
engine.addEntity(nftPictureFrame10)
nftPictureFrame10.setParent(_scene)
const transform9 = new Transform({
  position: new Vector3(2.719242572784424, 17.640642166137695, 25.20158576965332),
  rotation: new Quaternion(4.686765010781342e-15, 0, -6.0168951526891334e-15, 1),
  scale: new Vector3(4.408073902130127, 4.408059597015381, 0.5292623043060303)
})
nftPictureFrame10.addComponentOrReplace(transform9)

const nftPictureFrame11 = new Entity('nftPictureFrame11')
engine.addEntity(nftPictureFrame11)
nftPictureFrame11.setParent(_scene)
const transform10 = new Transform({
  position: new Vector3(6.5204339027404785, 17.640642166137695, 25.20158576965332),
  rotation: new Quaternion(4.686765010781342e-15, 0, -6.0168951526891334e-15, 1),
  scale: new Vector3(4.4080729484558105, 4.408059597015381, 0.5292621850967407)
})
nftPictureFrame11.addComponentOrReplace(transform10)

const nftPictureFrame12 = new Entity('nftPictureFrame12')
engine.addEntity(nftPictureFrame12)
nftPictureFrame12.setParent(_scene)
const transform11 = new Transform({
  position: new Vector3(6.520431995391846, 17.640642166137695, 24.882139205932617),
  rotation: new Quaternion(2.913920817013355e-15, 0.9999996423721313, -1.1920923270736239e-7, 0.0009407997131347656),
  scale: new Vector3(4.408092498779297, 4.408059597015381, 0.5292628407478333)
})
nftPictureFrame12.addComponentOrReplace(transform11)

const nftPictureFrame13 = new Entity('nftPictureFrame13')
engine.addEntity(nftPictureFrame13)
nftPictureFrame13.setParent(_scene)
const transform12 = new Transform({
  position: new Vector3(2.7192444801330566, 17.640642166137695, 24.87498664855957),
  rotation: new Quaternion(2.913920817013355e-15, 0.9999996423721313, -1.1920923270736239e-7, 0.0009407997131347656),
  scale: new Vector3(4.4080915451049805, 4.408059597015381, 0.5292628407478333)
})
nftPictureFrame13.addComponentOrReplace(transform12)

const nftPictureFrame14 = new Entity('nftPictureFrame14')
engine.addEntity(nftPictureFrame14)
nftPictureFrame14.setParent(_scene)
const transform13 = new Transform({
  position: new Vector3(12, 22.507265090942383, 31.550655364990234),
  rotation: new Quaternion(4.650567057780429e-15, -1, 1.1920927533992653e-7, 0),
  scale: new Vector3(4.408076763153076, 4.408059597015381, 0.5292626619338989)
})
nftPictureFrame14.addComponentOrReplace(transform13)

const nftPictureFrame15 = new Entity('nftPictureFrame15')
engine.addEntity(nftPictureFrame15)
nftPictureFrame15.setParent(_scene)
const transform14 = new Transform({
  position: new Vector3(7.859310150146484, 22.50726318359375, 31.536001205444336),
  rotation: new Quaternion(4.650567057780429e-15, -1, 1.1920927533992653e-7, 0),
  scale: new Vector3(4.40807580947876, 4.408059597015381, 0.5292625427246094)
})
nftPictureFrame15.addComponentOrReplace(transform14)

const nftPictureFrame16 = new Entity('nftPictureFrame16')
engine.addEntity(nftPictureFrame16)
nftPictureFrame16.setParent(_scene)
const transform15 = new Transform({
  position: new Vector3(3.9310388565063477, 22.50726318359375, 31.542085647583008),
  rotation: new Quaternion(4.650567057780429e-15, -1, 1.1920927533992653e-7, 0),
  scale: new Vector3(4.408076763153076, 4.408059597015381, 0.5292626619338989)
})
nftPictureFrame16.addComponentOrReplace(transform15)

const imageFromURL = new Entity('imageFromURL')
engine.addEntity(imageFromURL)
imageFromURL.setParent(_scene)
const transform16 = new Transform({
  position: new Vector3(0.7236291170120239, 2.830153465270996, 19.304380416870117),
  rotation: new Quaternion(-9.94497063503243e-15, 0.7071067690849304, -8.429368847373553e-8, 0.70710688829422),
  scale: new Vector3(5.630873203277588, 3.327970266342163, 3.1558566093444824)
})
imageFromURL.addComponentOrReplace(transform16)

const imageFromURL2 = new Entity('imageFromURL2')
engine.addEntity(imageFromURL2)
imageFromURL2.setParent(_scene)
const transform17 = new Transform({
  position: new Vector3(7.29093074798584, 3.3500986099243164, 24.058937072753906),
  rotation: new Quaternion(5.945440062063692e-17, -1, 1.1920927533992653e-7, 0),
  scale: new Vector3(2.6998751163482666, 2.6998727321624756, 2.6998751163482666)
})
imageFromURL2.addComponentOrReplace(transform17)

const externalLink = new Entity('externalLink')
engine.addEntity(externalLink)
externalLink.setParent(_scene)
const transform18 = new Transform({
  position: new Vector3(7.286314964294434, 2.7135493755340576, 23.927370071411133),
  rotation: new Quaternion(3.1151569987979003e-15, -5.960464477539063e-8, -1.088531040241566e-15, -1),
  scale: new Vector3(1.0000001192092896, 1, 1.0000001192092896)
})
externalLink.addComponentOrReplace(transform18)

const bermudaGrass = new Entity('bermudaGrass')
engine.addEntity(bermudaGrass)
bermudaGrass.setParent(_scene)
const gltfShape = new GLTFShape("c9b17021-765c-4d9a-9966-ce93a9c323d1/FloorBaseGrass_01/FloorBaseGrass_01.glb")
gltfShape.withCollisions = true
gltfShape.isPointerBlocker = true
gltfShape.visible = true
bermudaGrass.addComponentOrReplace(gltfShape)
const transform19 = new Transform({
  position: new Vector3(8, 0, 8),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
bermudaGrass.addComponentOrReplace(transform19)

const bermudaGrass2 = new Entity('bermudaGrass2')
engine.addEntity(bermudaGrass2)
bermudaGrass2.setParent(_scene)
bermudaGrass2.addComponentOrReplace(gltfShape)
const transform20 = new Transform({
  position: new Vector3(8, 0, 24),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
bermudaGrass2.addComponentOrReplace(transform20)

const soundSystem = new Entity('soundSystem')
engine.addEntity(soundSystem)
soundSystem.setParent(_scene)
const transform21 = new Transform({
  position: new Vector3(8, 0, 16),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
soundSystem.addComponentOrReplace(transform21)
const gltfShape2 = new GLTFShape("e6f24cb1-cedc-4e0c-bdb2-aa7dddb25e8a/sound system.glb")
gltfShape2.withCollisions = true
gltfShape2.isPointerBlocker = true
gltfShape2.visible = true
soundSystem.addComponentOrReplace(gltfShape2)

const galleryLights3 = new Entity('galleryLights3')
engine.addEntity(galleryLights3)
galleryLights3.setParent(_scene)
const transform22 = new Transform({
  position: new Vector3(8, 0, 16),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
galleryLights3.addComponentOrReplace(transform22)
const gltfShape3 = new GLTFShape("bac5ac97-5779-4978-b369-e8cf755a143f/gallery lights2.glb")
gltfShape3.withCollisions = true
gltfShape3.isPointerBlocker = true
gltfShape3.visible = true
galleryLights3.addComponentOrReplace(gltfShape3)

const nftPictureFrame8 = new Entity('nftPictureFrame8')
engine.addEntity(nftPictureFrame8)
nftPictureFrame8.setParent(_scene)
const transform23 = new Transform({
  position: new Vector3(11.842631340026855, 17.699689865112305, 0.4651790261268616),
  rotation: new Quaternion(4.686765010781342e-15, 0, -6.0168951526891334e-15, 1),
  scale: new Vector3(4.4080681800842285, 4.408059597015381, 0.529261589050293)
})
nftPictureFrame8.addComponentOrReplace(transform23)

const nftPictureFrame7 = new Entity('nftPictureFrame7')
engine.addEntity(nftPictureFrame7)
nftPictureFrame7.setParent(_scene)
const transform24 = new Transform({
  position: new Vector3(7.72804069519043, 17.699689865112305, 0.4651795029640198),
  rotation: new Quaternion(4.686765010781342e-15, 0, -6.0168951526891334e-15, 1),
  scale: new Vector3(4.4080681800842285, 4.408059597015381, 0.529261589050293)
})
nftPictureFrame7.addComponentOrReplace(transform24)

const nftPictureFrame17 = new Entity('nftPictureFrame17')
engine.addEntity(nftPictureFrame17)
nftPictureFrame17.setParent(_scene)
const transform25 = new Transform({
  position: new Vector3(4.719244480133057, 8.140642166137695, 9.306295394897461),
  rotation: new Quaternion(2.913920817013355e-15, 0.9999996423721313, -1.1920923270736239e-7, 0.0009407997131347656),
  scale: new Vector3(4.408108234405518, 4.408059597015381, 0.5292634963989258)
})
nftPictureFrame17.addComponentOrReplace(transform25)

const nftPictureFrame18 = new Entity('nftPictureFrame18')
engine.addEntity(nftPictureFrame18)
nftPictureFrame18.setParent(_scene)
const transform26 = new Transform({
  position: new Vector3(8.520431518554688, 8.140642166137695, 9.313447952270508),
  rotation: new Quaternion(2.913920817013355e-15, 0.9999996423721313, -1.1920923270736239e-7, 0.0009407997131347656),
  scale: new Vector3(4.408109188079834, 4.408059597015381, 0.5292633771896362)
})
nftPictureFrame18.addComponentOrReplace(transform26)

const nftPictureFrame19 = new Entity('nftPictureFrame19')
engine.addEntity(nftPictureFrame19)
nftPictureFrame19.setParent(_scene)
const transform27 = new Transform({
  position: new Vector3(0.7795689702033997, 3.1160659790039062, 8.202502250671387),
  rotation: new Quaternion(5.046421976449096e-15, -0.7064412832260132, 8.421434927186056e-8, -0.7077717185020447),
  scale: new Vector3(4.4081315994262695, 4.408059597015381, 0.5292632579803467)
})
nftPictureFrame19.addComponentOrReplace(transform27)

const nftPictureFrame20 = new Entity('nftPictureFrame20')
engine.addEntity(nftPictureFrame20)
nftPictureFrame20.setParent(_scene)
const transform28 = new Transform({
  position: new Vector3(0.7867215275764465, 3.116065502166748, 4.401315212249756),
  rotation: new Quaternion(5.046421976449096e-15, -0.7064412832260132, 8.421434927186056e-8, -0.7077717185020447),
  scale: new Vector3(4.408129692077637, 4.408059597015381, 0.5292634963989258)
})
nftPictureFrame20.addComponentOrReplace(transform28)

const nftPictureFrame21 = new Entity('nftPictureFrame21')
engine.addEntity(nftPictureFrame21)
nftPictureFrame21.setParent(_scene)
const transform29 = new Transform({
  position: new Vector3(3.588076591491699, 3.1996898651123047, 0.822449266910553),
  rotation: new Quaternion(4.686765010781342e-15, 0, -6.0168951526891334e-15, 1),
  scale: new Vector3(4.408069133758545, 4.408059597015381, 0.5292617082595825)
})
nftPictureFrame21.addComponentOrReplace(transform29)

const nftPictureFrame22 = new Entity('nftPictureFrame22')
engine.addEntity(nftPictureFrame22)
nftPictureFrame22.setParent(_scene)
const transform30 = new Transform({
  position: new Vector3(7.928542137145996, 3.1996898651123047, 0.8343945145606995),
  rotation: new Quaternion(4.686765010781342e-15, 0, -6.0168951526891334e-15, 1),
  scale: new Vector3(4.4080681800842285, 4.408059597015381, 0.529261589050293)
})
nftPictureFrame22.addComponentOrReplace(transform30)

const nftPictureFrame23 = new Entity('nftPictureFrame23')
engine.addEntity(nftPictureFrame23)
nftPictureFrame23.setParent(_scene)
const transform31 = new Transform({
  position: new Vector3(12.043132781982422, 3.1996898651123047, 0.8343940377235413),
  rotation: new Quaternion(4.686765010781342e-15, 0, -6.0168951526891334e-15, 1),
  scale: new Vector3(4.4080681800842285, 4.408059597015381, 0.529261589050293)
})
nftPictureFrame23.addComponentOrReplace(transform31)

const elevator = new Entity('elevator')
engine.addEntity(elevator)
elevator.setParent(_scene)
const transform32 = new Transform({
  position: new Vector3(8, 0, 16),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
elevator.addComponentOrReplace(transform32)
const gltfShape4 = new GLTFShape("9e7a7c36-d10f-46a0-8dee-2d8f53466042/elevator2.glb")
gltfShape4.withCollisions = true
gltfShape4.isPointerBlocker = true
gltfShape4.visible = true
elevator.addComponentOrReplace(gltfShape4)

const elevator2 = new Entity('elevator2')
engine.addEntity(elevator2)
elevator2.setParent(_scene)
const transform33 = new Transform({
  position: new Vector3(8, 0, 16),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
elevator2.addComponentOrReplace(transform33)
const gltfShape5 = new GLTFShape("b9d9bd34-fdf6-489f-adeb-ad94fd665f7e/elevator1.glb")
gltfShape5.withCollisions = true
gltfShape5.isPointerBlocker = true
gltfShape5.visible = true
elevator2.addComponentOrReplace(gltfShape5)

const djdisc = new Entity('djdisc')
engine.addEntity(djdisc)
djdisc.setParent(_scene)
const transform34 = new Transform({
  position: new Vector3(8, 0, 16),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
djdisc.addComponentOrReplace(transform34)
const gltfShape6 = new GLTFShape("d7072463-a420-41e4-9fd5-65c554dccd53/djdisc1.glb")
gltfShape6.withCollisions = true
gltfShape6.isPointerBlocker = true
gltfShape6.visible = true
djdisc.addComponentOrReplace(gltfShape6)

const djdisc2 = new Entity('djdisc2')
engine.addEntity(djdisc2)
djdisc2.setParent(_scene)
const transform35 = new Transform({
  position: new Vector3(8, 0, 16),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
djdisc2.addComponentOrReplace(transform35)
const gltfShape7 = new GLTFShape("e47914bf-6ca9-4845-8061-ce6ca043e110/djdisc2.glb")
gltfShape7.withCollisions = true
gltfShape7.isPointerBlocker = true
gltfShape7.visible = true
djdisc2.addComponentOrReplace(gltfShape7)

const djset = new Entity('djset')
engine.addEntity(djset)
djset.setParent(_scene)
const transform36 = new Transform({
  position: new Vector3(8, 0, 16),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
djset.addComponentOrReplace(transform36)
const gltfShape8 = new GLTFShape("fbc617fa-0eec-42ce-8be3-6244873f8115/djset.glb")
gltfShape8.withCollisions = true
gltfShape8.isPointerBlocker = true
gltfShape8.visible = true
djset.addComponentOrReplace(gltfShape8)

const discoball = new Entity('discoball')
engine.addEntity(discoball)
discoball.setParent(_scene)
const transform37 = new Transform({
  position: new Vector3(8, 0, 16),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
discoball.addComponentOrReplace(transform37)
const gltfShape9 = new GLTFShape("885a99c6-3460-4744-9815-70277e355ef4/discoball.glb")
gltfShape9.withCollisions = true
gltfShape9.isPointerBlocker = true
gltfShape9.visible = true
discoball.addComponentOrReplace(gltfShape9)

const barchairs = new Entity('barchairs')
engine.addEntity(barchairs)
barchairs.setParent(_scene)
const transform38 = new Transform({
  position: new Vector3(8, 0, 16),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
barchairs.addComponentOrReplace(transform38)
const gltfShape10 = new GLTFShape("b94ae756-8f56-43f7-8729-dac0e8fe3a3e/barchairs.glb")
gltfShape10.withCollisions = true
gltfShape10.isPointerBlocker = true
gltfShape10.visible = true
barchairs.addComponentOrReplace(gltfShape10)

const bar = new Entity('bar')
engine.addEntity(bar)
bar.setParent(_scene)
const transform39 = new Transform({
  position: new Vector3(8, 0, 16),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
bar.addComponentOrReplace(transform39)
const gltfShape11 = new GLTFShape("8c438e7b-f207-4f9a-8163-d4fb8623ac15/bar.glb")
gltfShape11.withCollisions = true
gltfShape11.isPointerBlocker = true
gltfShape11.visible = true
bar.addComponentOrReplace(gltfShape11)

const decorationLatest = new Entity('decorationLatest')
engine.addEntity(decorationLatest)
decorationLatest.setParent(_scene)
const transform40 = new Transform({
  position: new Vector3(8, 0, 16),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
decorationLatest.addComponentOrReplace(transform40)
const gltfShape12 = new GLTFShape("9a5b069a-f8e8-46a0-9ed3-df3dc4ca5594/decoration latest.glb")
gltfShape12.withCollisions = true
gltfShape12.isPointerBlocker = true
gltfShape12.visible = true
decorationLatest.addComponentOrReplace(gltfShape12)

const fridge = new Entity('fridge')
engine.addEntity(fridge)
fridge.setParent(_scene)
const transform41 = new Transform({
  position: new Vector3(8, 0, 16),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
fridge.addComponentOrReplace(transform41)
const gltfShape13 = new GLTFShape("eeb0413d-6813-4d98-9cca-7f75694b3268/fridge.glb")
gltfShape13.withCollisions = true
gltfShape13.isPointerBlocker = true
gltfShape13.visible = true
fridge.addComponentOrReplace(gltfShape13)

const drinks = new Entity('drinks')
engine.addEntity(drinks)
drinks.setParent(_scene)
const transform42 = new Transform({
  position: new Vector3(8, 0, 16),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
drinks.addComponentOrReplace(transform42)
const gltfShape14 = new GLTFShape("9e34db82-91de-4dfd-9575-296ba7dbb1af/drinks.glb")
gltfShape14.withCollisions = true
gltfShape14.isPointerBlocker = true
gltfShape14.visible = true
drinks.addComponentOrReplace(gltfShape14)

const arrow = new Entity('arrow')
engine.addEntity(arrow)
arrow.setParent(_scene)
const transform43 = new Transform({
  position: new Vector3(8, 0, 16),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
arrow.addComponentOrReplace(transform43)
const gltfShape15 = new GLTFShape("156dd4bb-9d13-4036-ba15-fbe347406529/arrow.glb")
gltfShape15.withCollisions = true
gltfShape15.isPointerBlocker = true
gltfShape15.visible = true
arrow.addComponentOrReplace(gltfShape15)

const greenLasersBeams = new Entity('greenLasersBeams')
engine.addEntity(greenLasersBeams)
greenLasersBeams.setParent(_scene)
const transform44 = new Transform({
  position: new Vector3(8.359834671020508, 0, 16),
  rotation: new Quaternion(-1.5203487543891635e-15, 0.7071068286895752, -8.429368847373553e-8, 0.7071067690849304),
  scale: new Vector3(1, 1, 1)
})
greenLasersBeams.addComponentOrReplace(transform44)
const gltfShape16 = new GLTFShape("3e7a0357-3e50-4318-ad92-e61a990be86e/2 green lasers beams.glb")
gltfShape16.withCollisions = true
gltfShape16.isPointerBlocker = true
gltfShape16.visible = true
greenLasersBeams.addComponentOrReplace(gltfShape16)

const oneGreenLaserBeam = new Entity('oneGreenLaserBeam')
engine.addEntity(oneGreenLaserBeam)
oneGreenLaserBeam.setParent(_scene)
const transform45 = new Transform({
  position: new Vector3(8.359834671020508, 0, 16),
  rotation: new Quaternion(-1.5203487543891635e-15, 0.7071068286895752, -8.429368847373553e-8, 0.7071067690849304),
  scale: new Vector3(1, 1, 1)
})
oneGreenLaserBeam.addComponentOrReplace(transform45)
const gltfShape17 = new GLTFShape("7351d312-2baa-450f-8ec5-64869a77146d/one green laser beam.glb")
gltfShape17.withCollisions = true
gltfShape17.isPointerBlocker = true
gltfShape17.visible = true
oneGreenLaserBeam.addComponentOrReplace(gltfShape17)

const greenLasers = new Entity('greenLasers')
engine.addEntity(greenLasers)
greenLasers.setParent(_scene)
const transform46 = new Transform({
  position: new Vector3(8.359834671020508, 0, 16),
  rotation: new Quaternion(-1.5203487543891635e-15, 0.7071068286895752, -8.429368847373553e-8, 0.7071067690849304),
  scale: new Vector3(1, 1, 1)
})
greenLasers.addComponentOrReplace(transform46)
const gltfShape18 = new GLTFShape("97814e65-1c0c-4297-bbfd-fddf0bded1c3/2 green lasers.glb")
gltfShape18.withCollisions = true
gltfShape18.isPointerBlocker = true
gltfShape18.visible = true
greenLasers.addComponentOrReplace(gltfShape18)

const greenlaserHolder = new Entity('greenlaserHolder')
engine.addEntity(greenlaserHolder)
greenlaserHolder.setParent(_scene)
const transform47 = new Transform({
  position: new Vector3(8.359834671020508, 0, 16),
  rotation: new Quaternion(-1.5203487543891635e-15, 0.7071068286895752, -8.429368847373553e-8, 0.7071067690849304),
  scale: new Vector3(1, 1, 1)
})
greenlaserHolder.addComponentOrReplace(transform47)
const gltfShape19 = new GLTFShape("8991cecd-1561-4ebc-99c4-7818e13e248c/greenlaser holder.glb")
gltfShape19.withCollisions = true
gltfShape19.isPointerBlocker = true
gltfShape19.visible = true
greenlaserHolder.addComponentOrReplace(gltfShape19)

const oneGreenLaser = new Entity('oneGreenLaser')
engine.addEntity(oneGreenLaser)
oneGreenLaser.setParent(_scene)
const transform48 = new Transform({
  position: new Vector3(8.359834671020508, 0, 16),
  rotation: new Quaternion(-1.5203487543891635e-15, 0.7071068286895752, -8.429368847373553e-8, 0.7071067690849304),
  scale: new Vector3(1, 1, 1)
})
oneGreenLaser.addComponentOrReplace(transform48)
const gltfShape20 = new GLTFShape("e3f51269-59d0-4656-ad45-d83e7b0ec36d/one green laser.glb")
gltfShape20.withCollisions = true
gltfShape20.isPointerBlocker = true
gltfShape20.visible = true
oneGreenLaser.addComponentOrReplace(gltfShape20)

const videoStream = new Entity('videoStream')
engine.addEntity(videoStream)
videoStream.setParent(_scene)
const transform49 = new Transform({
  position: new Vector3(6.824635028839111, 9.340676307678223, 9.721580505371094),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(3.4652938842773438, 3.4652938842773438, 3.4652938842773438)
})
videoStream.addComponentOrReplace(transform49)

const ghostForEthereals = new Entity('ghostForEthereals')
engine.addEntity(ghostForEthereals)
ghostForEthereals.setParent(_scene)
const transform50 = new Transform({
  position: new Vector3(8, 0, 16),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
ghostForEthereals.addComponentOrReplace(transform50)
const gltfShape21 = new GLTFShape("4e90aec9-0f54-4d18-a04d-730d5953d16d/ghost for ethereals .glb")
gltfShape21.withCollisions = true
gltfShape21.isPointerBlocker = true
gltfShape21.visible = true
ghostForEthereals.addComponentOrReplace(gltfShape21)

const arcade = new Entity('arcade')
engine.addEntity(arcade)
arcade.setParent(_scene)
const transform51 = new Transform({
  position: new Vector3(8, 0, 16),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
arcade.addComponentOrReplace(transform51)
const gltfShape22 = new GLTFShape("f219405d-8b12-4872-98e9-9f7e0e6a1161/arcade.glb")
gltfShape22.withCollisions = true
gltfShape22.isPointerBlocker = true
gltfShape22.visible = true
arcade.addComponentOrReplace(gltfShape22)

const logoWithoutLightMetalic = new Entity('logoWithoutLightMetalic')
engine.addEntity(logoWithoutLightMetalic)
logoWithoutLightMetalic.setParent(_scene)
const transform52 = new Transform({
  position: new Vector3(8, 0, 16),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
logoWithoutLightMetalic.addComponentOrReplace(transform52)
const gltfShape23 = new GLTFShape("d64442cb-e361-4031-9e08-e42a214b1c4e/logo without light&metalic.glb")
gltfShape23.withCollisions = true
gltfShape23.isPointerBlocker = true
gltfShape23.visible = true
logoWithoutLightMetalic.addComponentOrReplace(gltfShape23)

const signpostTree = new Entity('signpostTree')
engine.addEntity(signpostTree)
signpostTree.setParent(_scene)
const transform53 = new Transform({
  position: new Vector3(1.5, 14.202914237976074, 2.5629711151123047),
  rotation: new Quaternion(-3.4870180151696942e-15, 3.487018438686168e-15, 0.7071068286895752, -0.7071068286895752),
  scale: new Vector3(1.4546812772750854, 1.4546799659729004, 1.0585696697235107)
})
signpostTree.addComponentOrReplace(transform53)

const signpostTree2 = new Entity('signpostTree2')
engine.addEntity(signpostTree2)
signpostTree2.setParent(_scene)
const transform54 = new Transform({
  position: new Vector3(14.117444038391113, 19.22796630859375, 29.38768196105957),
  rotation: new Quaternion(-0.7071068286895752, 0.7071068286895752, -8.429368847373553e-8, -8.429368847373553e-8),
  scale: new Vector3(1.4546809196472168, 1.4546796083450317, 1.0585708618164062)
})
signpostTree2.addComponentOrReplace(transform54)

const etherealsSeriousBlendrotated = new Entity('etherealsSeriousBlendrotated')
engine.addEntity(etherealsSeriousBlendrotated)
etherealsSeriousBlendrotated.setParent(_scene)
const transform55 = new Transform({
  position: new Vector3(8, 0, 16),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
etherealsSeriousBlendrotated.addComponentOrReplace(transform55)
const gltfShape24 = new GLTFShape("fb2f376d-dda4-4d42-888b-20e5385b6960/ethereals serious.blendrotated.glb")
gltfShape24.withCollisions = true
gltfShape24.isPointerBlocker = true
gltfShape24.visible = true
etherealsSeriousBlendrotated.addComponentOrReplace(gltfShape24)

const channelId = Math.random().toString(16).slice(2)
const channelBus = new MessageBus()
const inventory = createInventory(UICanvas, UIContainerStack, UIImage)
const options = { inventory }

const script1 = new Script1()
const script2 = new Script2()
const script3 = new Script3()
const script4 = new Script4()
const script5 = new Script5()
script1.init(options)
script2.init(options)
script3.init(options)
script4.init(options)
script5.init(options)
script1.spawn(nftPictureFrame, {"id":"570","contract":"0x22BE9a505dFEC44a39A0734c1424D67EF528CdB8","style":"Classic","color":"#FFFFFF","ui":true}, createChannel(channelId, nftPictureFrame, channelBus))
script1.spawn(nftPictureFrame2, {"id":"1021","contract":"0x22BE9a505dFEC44a39A0734c1424D67EF528CdB8","style":"Classic","color":"#FFFFFF","ui":true}, createChannel(channelId, nftPictureFrame2, channelBus))
script1.spawn(nftPictureFrame3, {"id":"1381","contract":"0x22BE9a505dFEC44a39A0734c1424D67EF528CdB8","style":"Classic","color":"#FFFFFF","ui":true}, createChannel(channelId, nftPictureFrame3, channelBus))
script1.spawn(nftPictureFrame4, {"id":"950","contract":"0x22BE9a505dFEC44a39A0734c1424D67EF528CdB8","style":"Classic","color":"#FFFFFF","ui":true}, createChannel(channelId, nftPictureFrame4, channelBus))
script1.spawn(nftPictureFrame5, {"id":"1254","contract":"0x22BE9a505dFEC44a39A0734c1424D67EF528CdB8","style":"Classic","color":"#FFFFFF","ui":true}, createChannel(channelId, nftPictureFrame5, channelBus))
script1.spawn(nftPictureFrame6, {"id":"722","contract":"0x22BE9a505dFEC44a39A0734c1424D67EF528CdB8","style":"Classic","color":"#FFFFFF","ui":true}, createChannel(channelId, nftPictureFrame6, channelBus))
script1.spawn(nftPictureFrame9, {"id":"1402","contract":"0xfC778Be06c9A58f8f3e5E99216eFBB28f750Bc98","style":"Classic","color":"#FFFFFF","ui":true}, createChannel(channelId, nftPictureFrame9, channelBus))
script1.spawn(nftPictureFrame10, {"id":"1283","contract":"0xfC778Be06c9A58f8f3e5E99216eFBB28f750Bc98","style":"Classic","color":"#FFFFFF","ui":true}, createChannel(channelId, nftPictureFrame10, channelBus))
script1.spawn(nftPictureFrame11, {"id":"11447","contract":"0xfC778Be06c9A58f8f3e5E99216eFBB28f750Bc98","style":"Classic","color":"#FFFFFF","ui":true}, createChannel(channelId, nftPictureFrame11, channelBus))
script1.spawn(nftPictureFrame12, {"id":"3919","contract":"0xfC778Be06c9A58f8f3e5E99216eFBB28f750Bc98","style":"Classic","color":"#FFFFFF","ui":true}, createChannel(channelId, nftPictureFrame12, channelBus))
script1.spawn(nftPictureFrame13, {"id":"6057","contract":"0xfC778Be06c9A58f8f3e5E99216eFBB28f750Bc98","style":"Classic","color":"#FFFFFF","ui":true}, createChannel(channelId, nftPictureFrame13, channelBus))
script1.spawn(nftPictureFrame14, {"id":"63","contract":"0x63e74bfC3B1f091f1eeBD161783702C1E59db172","style":"Classic","color":"#FFFFFF","ui":true}, createChannel(channelId, nftPictureFrame14, channelBus))
script1.spawn(nftPictureFrame15, {"id":"84","contract":"0x63e74bfC3B1f091f1eeBD161783702C1E59db172","style":"Classic","color":"#FFFFFF","ui":true}, createChannel(channelId, nftPictureFrame15, channelBus))
script1.spawn(nftPictureFrame16, {"id":"44","contract":"0x63e74bfC3B1f091f1eeBD161783702C1E59db172","style":"Classic","color":"#FFFFFF","ui":true}, createChannel(channelId, nftPictureFrame16, channelBus))
script2.spawn(imageFromURL, {"image":"https://i.imgur.com/VoD7hv2.png"}, createChannel(channelId, imageFromURL, channelBus))
script2.spawn(imageFromURL2, {"image":"https://i.imgur.com/964gZrF.png"}, createChannel(channelId, imageFromURL2, channelBus))
script3.spawn(externalLink, {"url":"https://linktr.ee/etherealswtf"}, createChannel(channelId, externalLink, channelBus))
script1.spawn(nftPictureFrame8, {"id":"2332","contract":"0xfC778Be06c9A58f8f3e5E99216eFBB28f750Bc98","style":"Classic","color":"#FFFFFF","ui":true}, createChannel(channelId, nftPictureFrame8, channelBus))
script1.spawn(nftPictureFrame7, {"id":"6558","contract":"0xfC778Be06c9A58f8f3e5E99216eFBB28f750Bc98","style":"Classic","color":"#FFFFFF","ui":true}, createChannel(channelId, nftPictureFrame7, channelBus))
script1.spawn(nftPictureFrame17, {"id":"28","contract":"0x22BE9a505dFEC44a39A0734c1424D67EF528CdB8","style":"Classic","color":"#FFFFFF","ui":true}, createChannel(channelId, nftPictureFrame17, channelBus))
script1.spawn(nftPictureFrame18, {"id":"1373","contract":"0x22BE9a505dFEC44a39A0734c1424D67EF528CdB8","style":"Classic","color":"#FFFFFF","ui":true}, createChannel(channelId, nftPictureFrame18, channelBus))
script1.spawn(nftPictureFrame19, {"id":"1586","contract":"0x22BE9a505dFEC44a39A0734c1424D67EF528CdB8","style":"Classic","color":"#FFFFFF","ui":true}, createChannel(channelId, nftPictureFrame19, channelBus))
script1.spawn(nftPictureFrame20, {"id":"1195","contract":"0x22BE9a505dFEC44a39A0734c1424D67EF528CdB8","style":"Classic","color":"#FFFFFF","ui":true}, createChannel(channelId, nftPictureFrame20, channelBus))
script1.spawn(nftPictureFrame21, {"id":"6214","contract":"0xfC778Be06c9A58f8f3e5E99216eFBB28f750Bc98","style":"Classic","color":"#FFFFFF","ui":true}, createChannel(channelId, nftPictureFrame21, channelBus))
script1.spawn(nftPictureFrame22, {"id":"240","contract":"0xfC778Be06c9A58f8f3e5E99216eFBB28f750Bc98","style":"Classic","color":"#FFFFFF","ui":true}, createChannel(channelId, nftPictureFrame22, channelBus))
script1.spawn(nftPictureFrame23, {"id":"11011","contract":"0xfC778Be06c9A58f8f3e5E99216eFBB28f750Bc98","style":"Classic","color":"#FFFFFF","ui":true}, createChannel(channelId, nftPictureFrame23, channelBus))
script4.spawn(videoStream, {"startOn":true,"onClickText":"Stream","volume":1,"onClick":[],"station":"https://theuniverse.club/live/sohoplaza/index.m3u8","onActivate":[{"entityName":"videoStream","actionId":"activate","values":{}}],"customStation":"","onDeactivate":[],"image":""}, createChannel(channelId, videoStream, channelBus))
script5.spawn(signpostTree, {"text":"NEXT FLOOR","fontSize":20}, createChannel(channelId, signpostTree, channelBus))
script5.spawn(signpostTree2, {"text":"NEXT FLOOR","fontSize":20}, createChannel(channelId, signpostTree2, channelBus))