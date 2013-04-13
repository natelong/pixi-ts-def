module PIXI {
    export class PxEventTarget implements EventTarget {
        public addEventListener();
        public removeEventListener();
        public dispatchEvent(evt:Event):bool;
    }

    export class AssetLoader extends PxEventTarget {
        public assetURLs:string[];

        constructor(assetURLs:string[]);
    }

    export class BaseTexture extends PxEventTarget{
        public height:number;
        public width:number;
        public source:HTMLImageElement;

        constructor(source:string);
    }

    export class CanvasRenderer {
        public context:CanvasRenderingContext2D;
        public height:number;
        public width:number;
        public view:HTMLCanvasElement;

        constructor(width:number, height:number, view?:HTMLCanvasElement, transparent?:bool);
        public render(stage:Stage);
    }

    export class DisplayObject {
        public alpha:number;
        public parent:DisplayObjectContainer;
        public position:Point;
        public rotation:number;
        public scale:Point;
        public stage:Stage;

        public static autoDetectRenderer(width:number, height:number, view:HTMLCanvasElement, transparent:bool);
    }

    export class DisplayObjectContainer extends DisplayObject{
        public children:DisplayObject[];

        public addChild(child:DisplayObject);
        public addChildAt(child:DisplayObject, index:number);
        public removeChild(child:DisplayObject);
    }

    export class InteractionData {
        public global:Point;
        public local:Point;
        public target:Sprite;
    }

    export class InteractionManager {
        public mouse:InteractionData;
        public stage:Stage;
        public touchs:Object;

        constructor(stage:Stage);

        public disableMouseOver();
        public enableMouseOver();
    }

    export class MovieClip extends Sprite {
        public animationSpeed:number;
        public currentFrame:number;
        public playing:bool;
        public textures:Texture[];

        constructor(textures:Texture[]);

        public gotoAndPlay(frameNumber:number);
        public gotoAndStop(frameNumber:number);
        public play();
        public stop();
    }

    export class Point {
        public x:number;
        public y:number;

        constructor(x:number, y:number);

        public clone():Point;
    }

    export class Rectangle {
        public x:number;
        public y:number;
        public width:number;
        public height:number;

        constructor(x:number, y:number, width:number, height:number);

        public clone():Rectangle;
    }

    export class Sprite extends DisplayObjectContainer{
        public anchor:Point;
        public blendMode:number;
        public height:number;
        public width:number;
        public texture:Texture;

        constructor(t:Texture);

        public static fromFrame(frameId:string);
        public static fromImage(imgName:string);

        public click(e:InteractionData);
        public mousedown(e:InteractionData);
        public mouseout(e:InteractionData);
        public mouseover(e:InteractionData);
        public mouseup(e:InteractionData);
        public tap(e:InteractionData);
        public touchstart(e:InteractionData);
        public touchend(e:InteractionData);
        public setInteractive(interactive:bool);
        public setTexture(texture:Texture);
    }

    export class SpriteSheetLoader extends PxEventTarget {
        constructor(url:string);
    }

    export class Stage extends DisplayObjectContainer{
        constructor(backgroundColor?:number, interactive?:bool);

        public setBackgroundColor(backgroundColor:number);
        public updateTransform();
    }

    export class Texture extends PxEventTarget {
        public baseTexture;
        public frame;

        constructor(baseTexture:BaseTexture, frame:Rectangle);

        public static fromCanvas(canvas:HTMLCanvasElement);
        public static fromImage(imageUrl:string);

        public addTexturetoCache(texture:Texture, id:string);
        public fromFrame(frameId:string);
        public removeTextureFromCache(id:string);
        public setFrame(frame:Rectangle);
    }

    export class WebGLBatch {
        public init(sprite:Sprite);
        public insertAfter(sprite:Sprite, previousSprite:Sprite);
        public insertBefore(sprite:Sprite, nextSprite:Sprite);
        public merge(batch:WebGLBatch);
        public refresh();
        public remove(sprite:Sprite);
        public render();
        public split(sprite:Sprite):WebGLBatch;
        public update();
    }

    export class WebGLRenderer {
        public view:HTMLCanvasElement;

        constructor(width:number, height:number, view?:HTMLCanvasElement, transparent?:bool);

        public render(stage:Stage);
        public resize(width:number, height:number);
    }

    

    
}