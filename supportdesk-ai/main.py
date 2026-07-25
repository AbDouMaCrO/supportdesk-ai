"""
Root entry point for `uvicorn main:app`.
Uses importlib to load backend/main.py under a different module name
so there's no circular import when this file IS the `main` module.
"""
import sys
import os
import importlib.util

_here = os.path.dirname(os.path.abspath(__file__))
sys.path.insert(0, os.path.join(_here, "backend"))

_spec = importlib.util.spec_from_file_location(
    "_supportdesk_backend",
    os.path.join(_here, "backend", "main.py"),
)
_mod = importlib.util.module_from_spec(_spec)
sys.modules["_supportdesk_backend"] = _mod
_spec.loader.exec_module(_mod)

app = _mod.app
