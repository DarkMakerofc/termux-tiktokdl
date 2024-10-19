# termux-tiktokdl
An Simple tiktok video internal storage save app

## Steps.
1. Download termux app , open app and give storage permission.
```bash
termux-setup-storage
```  
2. Update packages.
```bash
pkg update && pkg upgrade
```
3. Install Git.
```bash
pkg install git
```
4. Install node.js
```bash
pkg install nodejs
```
5. Clone this repository and open.
```bash
git clone https://github.com/MR-NIMA-X/termux-tiktokdl.git && cd termux-tiktokdl
```
6. Install Dependencies.
```bash
npm install
```
7. Download tiktok video using link
```bash
node down < tiktok link >
```
Example download video: 
```bash
node down https://vt.tiktok.com/ZS2vSs5fL/
```

Example download audio ( .mp3 file ): 
```bash
node down https://vt.tiktok.com/ZS2vSs5fL/ mp3
```

Example download HD video: 
```bash
node down https://vt.tiktok.com/ZS2vSs5fL/ hd
```
## Images.
![SmartSelect_20241016-215758_Termux](https://github.com/user-attachments/assets/485ab0e3-720f-45d0-b318-9443e0f13206)


![Screenshot_20241016-215810_My Files](https://github.com/user-attachments/assets/c72f3de9-4ecf-4ea1-ae25-9632497638d1)
