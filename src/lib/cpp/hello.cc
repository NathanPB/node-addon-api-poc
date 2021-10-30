#include <napi.h>

Napi::String Method(const Napi::CallbackInfo& info) {
  Napi::Env env = info.Env();
  int b = 0;
  for(int i=0; i<10000000; i++) {
    b += 15 + rand();
  }
  return Napi::String::New(env, "invoked from cpp " + std::to_string(b));
}

Napi::Object Init(Napi::Env env, Napi::Object exports) {
  exports.Set(Napi::String::New(env, "teste"),
              Napi::Function::New(env, Method));
  return exports;
}

NODE_API_MODULE(hello, Init)
