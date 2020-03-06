import React, { useEffect } from "react";
import { NativeModules } from "react-native";

export function useKeepAwake() {
  useEffect(() => {
    NativeModules.KCKeepAwake.activate();
    return () => NativeModules.KCKeepAwake.deactivate();
  }, []);
}

export function activateKeepAwake() {
  NativeModules.KCKeepAwake.activate();
}

export function deactivateKeepAwake() {
  NativeModules.KCKeepAwake.deactivate();
}

export default function KeepAwake() {
  useEffect(() => {
    NativeModules.KCKeepAwake.activate();
    return () => NativeModules.KCKeepAwake.deactivate();
  }, []);

  return null;
}
