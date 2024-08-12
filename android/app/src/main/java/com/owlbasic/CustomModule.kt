package com.owlbasic;

import com.facebook.react.bridge.NativeModule
import com.facebook.react.bridge.ReactApplicationContext
import com.facebook.react.bridge.ReactContext
import com.facebook.react.bridge.ReactContextBaseJavaModule
import com.facebook.react.bridge.ReactMethod

class CustomModule(reactContext: ReactApplicationContext) : ReactContextBaseJavaModule(reactContext) {

    override fun getName() = "CustomModule"

    @ReactMethod(isBlockingSynchronousMethod = true)
    fun checkJSThreadBlock() {
        android.util.Log.d("CustomModule", "checkJSThreadBlock: executed for thread ${Thread.currentThread().id} ${Thread.currentThread().name} ")
        Thread.sleep(5000)
    }

    @ReactMethod
    fun checkJSThreadAsync() {
        android.util.Log.d("CustomModule", "checkJSThreadAsync: executed for thread ${Thread.currentThread().id} ${Thread.currentThread().name} ")
        Thread.sleep(5000)
    }

}