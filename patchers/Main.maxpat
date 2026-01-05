{
    "patcher": {
        "fileversion": 1,
        "appversion": {
            "major": 9,
            "minor": 1,
            "revision": 0,
            "architecture": "x64",
            "modernui": 1
        },
        "classnamespace": "box",
        "rect": [ 33.0, 80.0, 1980.0, 1038.0 ],
        "boxes": [
            {
                "box": {
                    "id": "obj-11",
                    "maxclass": "message",
                    "numinlets": 2,
                    "numoutlets": 1,
                    "outlettype": [ "" ],
                    "patching_rect": [ 18.0, 557.0, 180.0, 22.0 ],
                    "text": "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0"
                }
            },
            {
                "box": {
                    "id": "obj-9",
                    "maxclass": "newobj",
                    "numinlets": 1,
                    "numoutlets": 1,
                    "outlettype": [ "" ],
                    "patching_rect": [ 18.0, 175.0, 128.0, 22.0 ],
                    "text": "prepend setNumSteps"
                }
            },
            {
                "box": {
                    "id": "obj-8",
                    "maxclass": "newobj",
                    "numinlets": 1,
                    "numoutlets": 1,
                    "outlettype": [ "" ],
                    "patching_rect": [ 18.0, 117.0, 77.0, 22.0 ],
                    "text": "loadmess 16"
                }
            },
            {
                "box": {
                    "id": "obj-7",
                    "maxclass": "number",
                    "maximum": 16,
                    "minimum": 2,
                    "numinlets": 1,
                    "numoutlets": 2,
                    "outlettype": [ "", "bang" ],
                    "parameter_enable": 0,
                    "patching_rect": [ 18.0, 147.0, 50.0, 22.0 ]
                }
            },
            {
                "box": {
                    "filename": "Sequence.js",
                    "id": "obj-1",
                    "maxclass": "v8ui",
                    "numinlets": 1,
                    "numoutlets": 1,
                    "outlettype": [ "" ],
                    "parameter_enable": 0,
                    "patching_rect": [ 18.0, 210.0, 348.0, 330.0 ],
                    "textfile": {
                        "filename": "Sequence.js",
                        "flags": 0,
                        "embed": 0,
                        "autowatch": 1
                    },
                    "varname": "v8ui_AA"
                }
            }
        ],
        "lines": [
            {
                "patchline": {
                    "destination": [ "obj-11", 1 ],
                    "midpoints": [ 27.5, 552.0, 188.5, 552.0 ],
                    "source": [ "obj-1", 0 ]
                }
            },
            {
                "patchline": {
                    "destination": [ "obj-9", 0 ],
                    "source": [ "obj-7", 0 ]
                }
            },
            {
                "patchline": {
                    "destination": [ "obj-7", 0 ],
                    "source": [ "obj-8", 0 ]
                }
            },
            {
                "patchline": {
                    "destination": [ "obj-1", 0 ],
                    "source": [ "obj-9", 0 ]
                }
            }
        ],
        "autosave": 0
    }
}